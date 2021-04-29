import React from 'react'
import HighScore from './HighScore';
import { db } from '../firebase/firebase';

function User(props: any) {
  
  // const wpmRef = db.collection("users").doc(props.user?.uid);
  //   wpmRef.get().then((doc) => {
  //     props.setScore(doc.data());
  //   });

  const isLoggedIn = props.user;
  console.log(props);
  if(isLoggedIn){
  return (
    <div>
      <div>
      {props.user.name}
      <img src={props.user.photo} alt={`${props.user.name}'s Profile Pic`}/>
      || Profile pic goes here
      </div>
      <div>
      This is where the user's stats will be
      </div>
      <HighScore highScr={props.highScr}/>
    </div>
  );} else {
    return (<h2>Once you are signed in your stats will be shown here.</h2>)
  }
}

export default User
