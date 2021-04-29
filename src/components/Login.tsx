import React from 'react'

import { auth, db, provider } from '../firebase/firebase';

function Login({ setUser, setScore }: any) {

  const initUserObj = (user: any) => {
    const wpmRef = db.collection("users").doc(user?.uid);
    wpmRef.get().then((doc) => {
      if(!doc.exists){
        db.collection('users').doc(user.uid).set({
          wpmBest: null,
        });
      } else {
        setScore(doc.data());
        console.log(doc.data());
      }
    })
  }

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      initUserObj(user);
      let newUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        uid: user?.uid
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);  // <-- This is where the state updates
    }).catch((error) => {
      alert(error.message);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
      setScore(null)
    })
  };

  return (
    <div className="loginDiv">
      <button onClick={signIn} className="loginBtn">Sign In</button>
      <button onClick={signOut} className="loginBtn">Sign Out</button>
    </div>
  )
}

export default Login;
