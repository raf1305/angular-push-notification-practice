self.addEventListener('notificationshow', (event) => {
  console.log('Notification shown:', event.notification);
  
    fetch('https://ahrtest.requestcatcher.com', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ Event: 'Show' })
    }).then(() => {
      console.log('Notification show event sent successfully.');
    }).catch((error) => {
      console.error('Error sending notification show event:', error);
    })
    event.notification.close();
    event.waitUntil(clients.matchAll({
      type: 'window'
    }).then((clientList) => {
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    }));
  
});

// Notification click event listener
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.notification);
  fetch('https://ahrtest.requestcatcher.com', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ Event: 'Clicked' })
  }).then(() => {
    console.log('Notification click event sent successfully.');
  }).catch((error) => {
    console.error('Error sending notification click event:', error);
  });
  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then((clientList) => {
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});

// Notification close event listener
self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed:', event.notification);
  fetch('https://ahrtest.requestcatcher.com', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ Event: 'Closed' })
  }).then(() => {
    console.log('Notification close event sent successfully.');
  }).catch((error) => {
    console.error('Error sending notification close event:', error);
  });
  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then((clientList) => {
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});


// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9cGqHXjzNyjs-BlYifjodEDYW7_X4PY",
  authDomain: "onboarding-8d6aa.firebaseapp.com",
  projectId: "onboarding-8d6aa",
  storageBucket: "onboarding-8d6aa.appspot.com",
  messagingSenderId: "267154360178",
  appId: "1:267154360178:web:04dae7941a05204b437feb",
  measurementId: "G-N6FNRBK0SM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Notification show event listener

