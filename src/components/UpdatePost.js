import React, { useState, useEffect } from 'react'
import { Typography, Box, TextField, Button } from '@material-ui/core'
import { navigate }  from '@reach/router'
import db from '../../firebase';

const UpdatePost = (props) => {
  console.log(props);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(()=>{
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.id)
    postRef
      .get()
      .then(doc => {
        let data = doc.data();
        // console.log(data);
        setTitle(data.title)
        setContent(data.content)
      })
    // let post = api[props.id];
    // setTitle(post.title);
    // setContent(post.content);
  },[])

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onContentChange = (event) => {
    setContent(event.target.value)
  }

  const onUpdatePost = () => {
    // console.log('create post');
    // console.log(title);
    // console.log(content);
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.id)
    let payload = { title, content }
    // console.log(payload);
    postRef.update(payload)
      .then(function () {
        // console.log("Document written with ID: ", doc);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
      navigate(`/blogs/${props.user.uid}/posts`)
  }

  return (
    <div className="create_post_container">
      <div className='page_header_container'>
        <Typography component="div" variant='h4'>
          <Box fontWeight='fontWeightBold'>
            Edit Post
        </Box>
        </Typography>
      </div>
      <div className="post_inputs_container">
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Title</h2>
          </div>
          <div className="post_input">
            <TextField placeholder="Post Title" fullWidth onChange={onTitleChange} value={title} />
          </div>
        </div>
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Content</h2>
          </div>
          <div className="post_input">
            <TextField placeholder="Post Content" multiline rows="10" fullWidth onChange={onContentChange} value={content} />
          </div>
        </div>
        <div className="post_input_button">
          <Button variant="contained" color="primary" size="large" onClick={onUpdatePost}>
            Edit Post
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost