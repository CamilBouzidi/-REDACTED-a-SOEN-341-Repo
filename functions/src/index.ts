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
  await admin.firestore().collection('posts').add(post)
  .then(() => {
    newNotification(user, 'newPost');
  });
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
  }).then();

  // Notify the followed user that he has a new follower
  await getUserInfo(followed).then(user => {
    newNotification(user, 'newFollower');
  });

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
/**
 * This function returns the user information as a .json object.
 * @param uid  uid of the user
 */
const getUserInfo = async (uid: string) => {
  let user;
  await admin.firestore().doc(`users/${uid}`).get().then(resolve => user = resolve.data());
  return user;
}

/**
 * This functions handles notifications.
 * @param user the user object
 * @param type newPost, newFollower
 */
const newNotification = (user: any, type: string) => {
  const followedBy = user.followedBy;
  followedBy.forEach((follower: string) => {
    admin.firestore().collection(`users/${follower}/notifications`).add({
      timestamp: Date.now(),
      type: type,
      seen: false,
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
      }
    }).catch(error => {
      console.error(error);
    });
  });
  return;
}

export const newStory = functions.https.onCall(async (data, context) => {
  if (!context.auth?.uid) {
    return; //Do not proceed if the user is not logged in.
  }

  // Get user info from firestone
  const user = await getUserInfo(context.auth.uid);
  let uploadDate : Date = new Date();
  let cutoffDate : Date = new Date(uploadDate);
  cutoffDate.setHours(cutoffDate.getHours()+data.expiryTime);


  // Create story object
  const story = {
    imageUrl: `storiesImages/${data.uuid}`,
    duration: data.duration,
    expiryTime: data.expiryTime,
    uploadTime: uploadDate,
    cutoffDate: cutoffDate,
    user
  }

  // Send post to firestone
  await admin.firestore().collection('stories').add(story)
  .then(() => {
    newNotification(user, 'newStory');
  });
  return {response: 'Success!'};
});

export const updateStories = functions.https.onCall(async (data, context) => {
  const now = Date.now();

  // Retrive all stories from Firebase
  admin.firestore().collection('stories')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
        const data = await doc.data()
        if (data.cutoffTimestamp < now) {
          admin.firestore().doc(`stories/${doc.id}`).delete();
        }
      });
    });

  return {response: 'Success!'};
});
