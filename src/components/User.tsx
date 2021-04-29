import React, {useEffect} from 'react'
import HighScore from './HighScore';
import { db } from '../firebase/firebase';

function User({user, highScr, setScore}: any) {
  
  const seeHighScore = () => {
    const wpmRef = db.collection("users").doc(user?.uid);
    wpmRef.get().then((doc) => {
      setScore(doc.data());
    });
  }
  
  
  const isLoggedIn = user;


  if(isLoggedIn){
  return (
    <div>
      <div>
      {user.name}
      <img src={user.photo} alt={`${user.name}'s Profile Pic`}/>
      || Profile pic goes here
      </div>
      <div>
      This is where the user's stats will be
      </div>
      <button onClick={seeHighScore}>Click here to update your highscore</button>
      <HighScore highScr={highScr}/>
    </div>
  );} else {
    return (<h2>Once you are signed in your stats will be shown here.</h2>)
  }
}

export default User
