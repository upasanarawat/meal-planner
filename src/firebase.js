import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZu9d5Y0P73hCSCP5AShbFI_dLuWnBLRs",
  authDomain: "meal-planner-3f84b.firebaseapp.com",
  projectId: "meal-planner-3f84b",
  storageBucket: "meal-planner-3f84b.firebasestorage.app",
  messagingSenderId: "1042363607192",
  appId: "1:1042363607192:web:ccaf31fe448e284a3b88ed"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)

export async function loadUserData(userId) {
  const snap = await getDoc(doc(db, 'users', userId))
  if (snap.exists()) return snap.data()
  return null
}

export async function saveUserData(userId, data) {
  await setDoc(doc(db, 'users', userId), data, { merge: true })
}
