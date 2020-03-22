import React, { useState } from 'react'
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { Link } from '@reach/router'
import { auth } from '../../firebase'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignUp = () => {
    // console.log('Sign Up');
    // console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error with Sign Up', errorCode, errorMessage);
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
            Sign Up
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
            <TextField type="password" fullWidth value={password} onChange={onPasswordChange} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ float: "left" }}>
              <Link to="/sign_in">Already have an account? Sign In</Link>
            </div>
            <div className="post_input_button">
              <Button variant="contained" color="primary" size="large" onClick={onSignUp}>
                Sign Up
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
