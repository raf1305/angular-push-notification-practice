// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: 'AIzaSyCI9cGqHXjzNyjs-BlYifjodEDYW7_X4PY',
    authDomain: 'onboarding-8d6aa.firebaseapp.com',
    projectId: 'onboarding-8d6aa',
    storageBucket: 'onboarding-8d6aa.appspot.com',
    messagingSenderId: '267154360178',
    appId: '1:267154360178:web:04dae7941a05204b437feb',
    measurementId: 'G-N6FNRBK0SM',
  },
};
export const SSL_KEY_PATH="src/ssl-key.pem"
export const SSL_CERT_PATH="src/ssl-cert.pem"

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
