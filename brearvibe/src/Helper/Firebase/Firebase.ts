import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjt_NkTvebVhibFK6cXEqVWOhSsYInNBI',
  authDomain: 'bearvibe-b319c.firebaseapp.com',
  projectId: 'bearvibe-b319c',
  storageBucket: 'bearvibe-b319c.appspot.com',
  messagingSenderId: '960216816701',
  appId: '1:960216816701:web:a53ed9c3d14f1f058d5e54',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
