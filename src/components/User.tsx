import React from 'react'
import HighScore from './HighScore';


function User({user, highScr}: any) {
  
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
      <HighScore highScr={highScr}/>
    </div>
  );} else {
    return (<h2>Once you are signed in your stats will be shown here.</h2>)
  }
}

export default User
