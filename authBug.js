const unsubscribe = onAuthStateChanged(auth, (user) => { if (user) {  // User is signed in, see docs for a list of available properties
  const uid = user.uid;  // ...
} else {  // User is signed out
  // ...
} });

// unsubscribe from the listener when the component unmounts
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);