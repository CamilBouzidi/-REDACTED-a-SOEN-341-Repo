# Setting Secrets

When you will clone the code from the repo, you might get an error in:

* `environment.prod.ts`
* `environment.ts`

You have to create the secret folder and files yourself.

## Secrets folder

Here are the steps to create the secrets folder that will contain secret environment variables

* Create a `secrets` folder in `src/environments/secrets`

## firebaseConfig file

Create a firebaseConfig file by doing the following:

1. Create a file in the secrets folder called `firebaseConfig.ts`

2. Get the config from the firebase project

    * Login to [Firebase](https://firebase.google.com)
    
    * Click on the ShutterFeed project
    
    * On the top-left corner, click on the little gear next to `Project Overview`
    
    * Choose Project Settings
    
    * Scroll down to where you see the `Your apps` section
    
    * With `ShutterFeed` selected as Web apps, you should see a section called `Firebase SDK snippet`
    
    * Choose the `Config` bullet
    
3. Copy/paste the `const firebaseConfig = {...}` data into the `firebaseConfig.ts` file
    
4. Add `export` before `const firebaseConfig`

It should look like this:

```typescript
// Content of secrets/firebaseConfig
export const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
  measurementId: '...'
};
```

TSLint might complain that you're using double quotes instead of single quotes. You can ignore that message or you could
let TSLint refactor all double quotes into single quotes

