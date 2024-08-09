import { Component, OnInit } from '@angular/core';
// import { AngularFireMessaging } from '@angular/fire/compat/messaging';
// import { AngularFireMessaging } from '@angular/fire/compat/messaging';
// import { SwPush } from '@angular/service-worker';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage  } from "firebase/messaging";


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
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

const vapidPublicKey = 'BOSBIj2iUaOSiisVIuBPJrjVnZegIhadOddsM7C2XEar-5jGMEmZXd5KjbWHOEMAl1Uvz3u-bWotT1XCKWTYkWA';
// const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

// function urlBase64ToUint8Array(base64String:string):any {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');
 
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
 
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  registration:any;
  constructor (
    // private afMessaging: AngularFireMessaging,
    // private swPush: SwPush
  ){
    // this.askPermission();

  }

  ngOnInit(): void {
    // this.afMessaging.messages
    //   .subscribe((message) => {
    //     console.log('Message received. ', message);
        // if (message)
        // this.showNotification(message);
        // this.arcService.showMessage({message: JSON.stringify(message)});
    // });

    // if (!('serviceWorker' in navigator)) {
    //   // Service Worker isn't supported on this browser, disable or hide UI.
    //   return;
    // }
    // else{
    //   this.registration = this.registerServiceWorker();
    // }

    // onMessage(messaging, (payload) => { 
    //   console.log('Message received. ', payload); 
    //   // ... 
    // });
    
  }

  registerServiceWorker() {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('Service worker successfully registered.');
        const title = 'Actions Notification';

        const notificationOptions = {
          body: "Body",
        };

        registration.showNotification(title, notificationOptions);
        registration.addEventListener('notificationclick', function(event) {
          console.log("Event",Event)
          console.log('App Notification click Received.');
        });
        registration.addEventListener('notificationshow', function(event) {
          console.log("Event",Event)
          console.log('App Notification show Received.');
        });


        // registration.unregister().then(function(unregister){
        //   console.log('Service worker successfully unregistered.');
        // });
      })
      .catch(function (err) {
        console.error('Unable to register service worker.', err);
      });
  }

  // askPermission() {
  //   return new Promise(function (resolve, reject) {
  //     const permissionResult = Notification.requestPermission(function (result) {
  //       resolve(result);
  //     });
  
  //     if (permissionResult) {
  //       permissionResult.then(resolve, reject);
  //     }
  //   }).then(function (permissionResult) {
  //     if (permissionResult !== 'granted') {
  //       throw new Error("We weren't granted permission.");
  //     }
  //     if (permissionResult === 'granted') {
  //       console.log("Permission Granted")
  //     }
  //   });
  // }


  onRequClick(){
    // this.registerServiceWorker()
    getToken(messaging, { vapidKey: vapidPublicKey }).then((currentToken) => {
      console.log(currentToken)
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
    // onMessage(messaging, (payload) => { 
    //     console.log('Message received. ', payload); 
    //     // ... 
    // });
    
    // this.subscribeUserToPush();

    // this.afMessaging.requestToken.subscribe(
    //   (token) => {
    //     console.log('FCM Token:', token);
    //   },
    //   (error) => {
    //     console.error('Unable to get permission to notify.', error);
    //   }
    // );

    // if ("Notification" in window) {
    //   Notification.requestPermission()
    //     .then((permission) => {
    //       if (permission === "granted") {
    //         console.log("Notification permission granted.");

    //         this.swPush.requestSubscription({
    //           serverPublicKey: 'BOSBIj2iUaOSiisVIuBPJrjVnZegIhadOddsM7C2XEar-5jGMEmZXd5KjbWHOEMAl1Uvz3u-bWotT1XCKWTYkWA'
    //         })
    //         .then(subscription => {
    //           console.log('User subscribed:', subscription);
    //           // Send subscription to the server to store and use for notifications
    //         })
    //         .catch(err => {
    //           console.error('Could not subscribe to notifications', err);
    //         });

    //         // this.showNotification();
    //       } else {
    //         console.log("Notification permission denied.");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error requesting notification permission:", error);
    //     });
    // } else {
    //   console.error("This browser does not support notifications.");
    // }
  }

  // subscribeUserToPush() {
  //   const subscribeOptions = {
  //     userVisibleOnly: true,
  //     applicationServerKey: convertedVapidKey,
  //   };

  //   return navigator.serviceWorker
  //     .register('/service-worker.js')
  //     .then(function (registration) {
  //       const subscribeOptions = {
  //         userVisibleOnly: true,
  //         applicationServerKey: convertedVapidKey,
  //       };
  
  //       return registration.pushManager.subscribe(subscribeOptions);
  //     })
  //     .then(function (pushSubscription) {
  //       console.log(
  //         'Received PushSubscription: ',
  //         JSON.stringify(pushSubscription),
  //       );
  //       return pushSubscription;
  //     });
  // }

  
}
