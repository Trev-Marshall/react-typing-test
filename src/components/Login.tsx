import React from 'react'
import { auth, provider } from '../firebase/firebase';

function Login({setUser}: any) {

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL
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
