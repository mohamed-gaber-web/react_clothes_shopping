import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    // config from firebase
    apiKey: "AIzaSyDaBm8FDXz_g9oMxE5HSSa_1G64gcxd_Cg",
    authDomain: "react-clothing-c50ce.firebaseapp.com",
    databaseURL: "https://react-clothing-c50ce.firebaseio.com",
    projectId: "react-clothing-c50ce",
    storageBucket: "",
    messagingSenderId: "849763627060",
    appId: "1:849763627060:web:686e72ef0204aef5b79a61"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create auth with firebase signInWIthGoogle
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// add authUser when user sign in to database [ firebase ]

/**
 * user => [ signIn === user profile ] [ sign out === null ]
 * user profile [ displayName, email, uid, photoUrl, phoneNumber ]
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {

    // check user is not work sign in
    if (!userAuth) return;

    // get id user from sign in google auth

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // add id google user auth to collection users

    const snapshot = await userRef.get();
    // get [id] user

    // console.log(snapshot); // object key: exists


    // check user id is not exist
    if (!snapshot.exists) {
        // create user to collection [users]

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            // code work add data 
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (err) {
            // code is error
            console.error('error creating user', err.message);
        }
    }

    return userRef;
}

export default firebase;