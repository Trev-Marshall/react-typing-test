import React from 'react'

function User(props: any) {
  const isLoggedIn = props.user;

  if(isLoggedIn){
  return (
    <div>
      <div>
      {props.user.name}
      <img src={props.user.photo}/>
      || Profile pic goes here
      </div>
      <div>
      This is where the user's stats will be
      </div>
    </div>
  );} else {
    return (<h1>You need to sign in first</h1>)
  }
}

export default User
