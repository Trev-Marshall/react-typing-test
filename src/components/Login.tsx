import React from 'react'

import { auth, db, provider } from '../firebase/firebase';

function Login({setUser, setScore }: any) {

  const initUserObj = (user: any) => {
    console.log(db.collection("users").doc(user?.uid))
    const wpmRef = db.collection("users").doc(user?.uid);
    wpmRef.get().then((doc) => {
      if(!doc.exists){
        db.collection('users').doc(user.uid).set({
          wpmBest: null,
        });
      } else {
        setScore(doc.data());
      }
    })
  }

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      console.log(user);
      initUserObj(user);
      let newUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        uid: user?.uid
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);  // <-- This is where the state updates
      console.log(user);
    }).catch((error) => {
      alert(error.message);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  };

  return (
    <div>
      This is the login page
      <button onClick={signIn}>click here to sign in</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Login;
