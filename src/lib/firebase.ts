import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAuth, Auth } from 'firebase/auth';
import configJson from '../../firebase-applet-config.json';

const metaEnv = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || configJson.apiKey || '',
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || configJson.authDomain || '',
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || configJson.projectId || '',
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || configJson.storageBucket || '',
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || configJson.messagingSenderId || '',
  appId: metaEnv.VITE_FIREBASE_APP_ID || configJson.appId || '',
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

const firebaseApp: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

const firestoreDatabaseId = (configJson as any)?.firestoreDatabaseId;

const db: Firestore = firestoreDatabaseId && firestoreDatabaseId !== '(default)'
  ? getFirestore(firebaseApp, firestoreDatabaseId)
  : getFirestore(firebaseApp);

const storage: FirebaseStorage = getStorage(firebaseApp);
const auth: Auth = getAuth(firebaseApp);

export { firebaseApp, db, storage, auth, firebaseConfig };
