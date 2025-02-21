import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const auth = getAuth(); // Assuming you have Firebase authentication configured

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
}, (error) => {
  console.error('onAuthStateChanged error:', error);
});

useEffect(() => {
  return () => {
    if (unsubscribe) {
      unsubscribe();
    }
  };
}, []);