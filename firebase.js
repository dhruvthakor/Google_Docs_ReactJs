import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDygfnioWG-KlPJV99Ig6XVyn3KTSpWWys",
    authDomain: "docs-4457a.firebaseapp.com",
    projectId: "docs-4457a",
    storageBucket: "docs-4457a.appspot.com",
    messagingSenderId: "808334240908",
    appId: "1:808334240908:web:55051f329250eada57dfa9"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();

  export { db };