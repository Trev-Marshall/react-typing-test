import React from 'react'
import HighScore from './HighScore';

function User(props: any) {
  const isLoggedIn = props.user;

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
