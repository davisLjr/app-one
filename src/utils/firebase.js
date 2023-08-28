// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHrc4cSeMadX5ikzf12-x6iA9TE4YtGyY',
  authDomain: 'chat-c6594.firebaseapp.com',
  databaseURL: 'https://chat-c6594-default-rtdb.firebaseio.com',
  projectId: 'chat-c6594',
  storageBucket: 'chat-c6594.appspot.com',
  messagingSenderId: '875911434326',
  appId: '1:875911434326:web:63ea5c04e33592a3fa6bf7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database};
