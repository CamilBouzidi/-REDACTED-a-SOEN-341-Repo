import { secrets } from './api-secret'; // Request the file from Laurent Lao

export const environment = {
  production: false,
  firebase: {
      apiKey: secrets.apiKey,
      authDomain: 'shutterfeed-soen341.firebaseapp.com',
      databaseURL: 'https://shutterfeed-soen341.firebaseio.com',
      projectId: 'shutterfeed-soen341',
      storageBucket: 'shutterfeed-soen341.appspot.com',
      messagingSenderId: secrets.messagingSenderId,
      appId: '1:1029712168063:web:dbd6e0c6d4ce9297eaeb4a',
      measurementId: 'G-315DLWS9LK'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
