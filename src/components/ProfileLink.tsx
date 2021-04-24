import React from 'react'

function ProfileLink(props: any) {
  let isLoggedIn = props.user;
  if(!isLoggedIn){
    return <p>Profile</p>;
  } else {
    return (isLoggedIn.name);
  }
}

export default ProfileLink
