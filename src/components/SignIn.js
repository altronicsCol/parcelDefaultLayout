import React, { useState } from 'react'
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { Link } from '@reach/router'
import { auth } from '../../firebase'
import {navigate} from '@reach/router'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignIn = () => {
    // console.log('Sign In');
    // console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
      .then(function(result){
        console.log('User sign in');
        navigate(`/blogs/${result.user.uid}/posts`)
      }) .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
    setEmail('');
    setPassword('');
  }

  return (
    <div className="sign_up_container">
      <div className='page_header_container'>
        <Typography component="div" variant='h4'>
          <Box fontWeight='fontWeightBold'>
            Sign In
        </Box>
        </Typography>
      </div>
      <div className="sign_up_container_inputs">
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Email</h2>
          </div>
          <div className="post_input">
            <TextField placeholder="somebody@gmail.com" fullWidth autoFocus value={email} onChange={onEmailChange} />
          </div>
        </div>
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Password</h2>
          </div>
          <div className="post_input">
            <TextField type="password" fullWidth onChange={onPasswordChange} value={password} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ float: "left" }}>
              <Link to="/sign_up">Don´t have an account? Sign Up</Link>
            </div>
            <div className="post_input_button">
              <Button variant="contained" color="primary" size="large" onClick={onSignIn}>
                Sign In
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
