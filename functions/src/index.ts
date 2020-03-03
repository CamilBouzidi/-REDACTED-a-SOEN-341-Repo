// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
admin.initializeApp();


/**
 * New Post
 * This functions handles the logic behind creating a new post.
 */
export const newPost = functions.https.onCall(async (data, context) => {
  if (!context.auth?.uid) {
    return; //Do not proceed if the user is not logged in.
  }

  // Get user info from firestone
  const user = await getUserInfo(context.auth.uid);

  // Create post object
  const post = {
    imageUrl: `images/${data.uuid}`,
    caption: data.caption,
    timestamp: Date.now(),
    user
  }

  // Send post to firestone
  await admin.firestore().collection('posts').add(post).then();
  return {response: 'Success!'};
});

export const follow = functions.https.onCall(async (data, context) => {
  if (!context.auth?.uid) {
    return; //Do not proceed if the user is not logged in.
  }

  const followed = data.uid;
  const follower = context.auth.uid;

  /*
  if (followed === follower) {
    return; //Cannot follow self.
  }
  */

  // Update followedBy collection on followed user
  await admin.firestore().doc(`users/${followed}`).update({
    followedBy: admin.firestore.FieldValue.arrayUnion(follower)
  }).then();

  // Add following collection on following user
  await admin.firestore().doc(`users/${follower}`).update({
    following: admin.firestore.FieldValue.arrayUnion(followed)
  })

  return 'Success!';
});

export const unfollow = functions.https.onCall(async (data, context) => {
  if (!context.auth?.uid) {
    return; //Do not proceed if the user is not logged in.
  }

  const followed = data.uid;
  const follower = context.auth.uid;

  // Update followedBy collection on followed user
  await admin.firestore().doc(`users/${followed}`).update({
    followedBy: admin.firestore.FieldValue.arrayRemove(follower)
  }).then();

  // Add following collection on following user
  await admin.firestore().doc(`users/${follower}`).update({
    following: admin.firestore.FieldValue.arrayRemove(followed)
  })

  return 'Removed successfully!';
});

// Private functions
export const getUserInfo = async (uid: string) => {
  let user;
  await admin.firestore().doc(`users/${uid}`).get().then(resolve => user = resolve.data());
  return user;
}