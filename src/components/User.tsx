import React from 'react'
import HighScore from './HighScore';

import { auth, db, provider } from '../firebase/firebase';


function User({ user, highScr, setUser, setScore }: any) {
  
  const initUserObj = (user: any) => {
    const wpmRef = db.collection("users").doc(user?.uid);
    wpmRef.get().then((doc) => {
      if(!doc.exists){
        db.collection('users').doc(user.uid).set({
          wpm: null,
        });
      } else {
        setScore(doc.data());
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

  const isLoggedIn = user;


  if(isLoggedIn){
  return (
    <div className="user-container">
      <h2>
      {user.name}
      </h2>
      <HighScore highScr={highScr} setScore={setScore} user={user}/>
      <div className="loginDiv">
      <button onClick={signIn} className="loginBtn button">Switch Accounts</button>
      <button onClick={signOut} className="loginBtn button">Sign Out</button>
    </div>
    </div>
  );} else {
    return (
    <div className="sign-in-container" >
      <h2>Once you are signed in your stats will be shown here.</h2>
      <div className='loginDiv' >
        <button onClick={signIn} className="loginBtn button" >Sign In</button>
      </div>
    </div>)
  }
}

export default User
