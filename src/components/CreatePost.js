import React, { useState } from 'react'
import { Typography, Box, TextField, Button } from '@material-ui/core'
import { navigate }  from '@reach/router'
import db from '../../firebase';

const CreatePost = (props) => {
  // console.log(props);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onContentChange = (event) => {
    setContent(event.target.value)
  }

  const onCreatePost = () => {
    // console.log('create post');
    // console.log(title);
    // console.log(content);
    let postRef = db.collection('users').doc(props.user.uid).collection('posts')
    let payload = { title, content }
    // console.log(payload);
    postRef.add(payload)
      .then(function (doc) {
        console.log("Document written with ID: ", doc.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
      setTitle('');
      setContent('');
      navigate(`/blogs/${props.user.uid}/posts`)
  }

  return (
    <div className="create_post_container">
      <div className='page_header_container'>
        <Typography component="div" variant='h4'>
          <Box fontWeight='fontWeightBold'>
            Create Post
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
          <Button variant="contained" color="primary" size="large" onClick={onCreatePost}>
            CREATE POST
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
