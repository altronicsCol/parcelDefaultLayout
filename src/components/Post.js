import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../mock_api'
import db from '../../firebase';

const useStyles = makeStyles((theme) => ({
  postSnippetContainer: {
    "& .MuiCardHeader-root": {
      backgroundColor: "#FFAACC",
    },
    marginBottom: theme.spacing(4),
  }
}));

const Post = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let userId = props?.user.uid ? props?.user.uid : props.uid

  useEffect(() => {
    let postRef = db.collection('users').doc(userId).collection('posts').doc(props.id)
    postRef
      .get()
      .then(doc => {
        let data = doc.data();
        console.log(data);
        setTitle(data.title)
        setContent(data.content)
      })
    // let post = api[props.id];
    // setTitle(post.title);
    // setContent(post.content);
  }, [])

  return (
    <div className="post_container">
      <div className='page_header_container'>
        <Typography component="h1" variant='h4'>
          <Box fontWeight='fontWeightBold'>
            {title}
          </Box>
        </Typography>
      </div>
      <div className={classes.postSnippetContainer}>
        <Card>
          <CardContent>
            <p className="articleContent">
              {
                content.split('\n').map((paragraph, idx) => {
                  return (
                    <p key={idx}> {paragraph} </p>
                  )
                })
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Post
