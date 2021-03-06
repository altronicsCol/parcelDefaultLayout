import React, { useState } from 'react'
import Posts from './Posts'
import Post from './Post';
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost.js';
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Router } from '@reach/router';
import AppNav from './AppNav'
import { auth } from '../../firebase'

const App = () => {

  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user);
      setUser(user);
    } else {
      // No user is signed in.
      console.log('No user sign in');
    }
  });

  const onSignOut = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
      console.log('Signin Out');
      setUser(false)
    }).catch(function (error) {
      // An error happened.
    });
  };

  return (
    <div className='app_container'>
      <AppNav user={user} onSignOut={onSignOut}/>
      <Router>
        <SignUp path="sign_up" />
        <SignIn path="sign_in" default />
        <Posts path="blogs/:uid/posts" user={user}/>
        <Post path="blogs/:uid/post/:id" user={user}/>
        <CreatePost path="create_post/"  user={user}/>
        <UpdatePost path="update_post/:id" user={user}/>
      </Router>
    </div>
  )
}

export default App;
