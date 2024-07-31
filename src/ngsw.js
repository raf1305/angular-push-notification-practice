self.addEventListener('notificationclick', function(event) {
  console.log("Event",Event)
  console.log('[firebase-messaging-sw.js] Notification click Received.');
});


importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9cGqHXjzNyjs-BlYifjodEDYW7_X4PY",
  authDomain: "onboarding-8d6aa.firebaseapp.com",
  projectId: "onboarding-8d6aa",
  storageBucket: "onboarding-8d6aa.appspot.com",
  messagingSenderId: "267154360178",
  appId: "1:267154360178:web:04dae7941a05204b437feb",
  measurementId: "G-N6FNRBK0SM"
};



firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   icon: payload.notification.icon
  // };
  // return self.registration.showNotification(notificationTitle, notificationOptions);
});


// self.addEventListener('notificationclick', (event) => {
//   const notification = event.notification;
//   const clickData = notification.data && notification.data.url; // Assuming you send a 'url' property
//   console.log("Notification Clicked")
//   if (clickData) {
//     window.open(clickData, '_blank');
//   } else {
//     // Handle notification click without data (optional)
//     event.waitUntil(clients.get(window.location.pathname).then(client => client.focus()));
//   }
// });




// "use strict";

// var url = [];
// var count = 0;

// self.addEventListener('install', function(event) {
//   console.log("Installing")
//   event.waitUntil(self.skipWaiting()); //will install the service worker
// });

// self.addEventListener('activate', function(event) {
//   console.log("Activated")
//   event.waitUntil(self.clients.claim()); //will activate the serviceworker
// });

// // Register event listener for the 'notificationclick' event.
// self.addEventListener('notificationclick', function(event) {
//   console.log("Clicked")
//   event.notification.close();

//   event.waitUntil(
//     clients.matchAll({
//       type: "window"
//     })
//     .then(function(clientList) {

//       if (clients.openWindow) {
//         var c = count;
//         count++;
//         return clients.openWindow(url[c]);
//       }
//     })
//   );

// });


// self.addEventListener('push', function(event) {
//   console.log("Push")
//   event.waitUntil(
//     self.registration.pushManager.getSubscription()
//     .then(function(subscription) {

//       console.log("subscription", subscription);

//       var payload = event.data ? JSON.parse(event.data.text()) : {
//         title: 'Cronj IT Technoliges Pvt Ltd',
//         body: 'CronJ combines the power of creativity and experience to employ a highly skilled team of Information Technology professionals who provide high-quality, high-value custom IT solutions to a variety of business enterprises.',
//         icon: 'https://static.cronj.com/img/logos/cronj-logo.png',
//         url: 'https://www.cronj.com'
//       };


//       url.push(payload.url);
//       return self.registration.showNotification(payload.title, {
//         body: payload.body,
//         icon: payload.icon,
//         tag: payload.url + payload.body + payload.icon + payload.title
//       });


//     })
//   );
// });

