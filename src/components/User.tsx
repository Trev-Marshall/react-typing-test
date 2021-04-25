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
    return (<h1>You need to sign in first</h1>)
  }
}

export default User
