import {secrets} from './api-secret'; // Request the file from Laurent Lao to be put in api-secret.ts

export const environment = {
  production: true,
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
