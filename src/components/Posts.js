import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';
import db from '../../firebase';

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    "& .MuiCardHeader-root": {
      backgroundColor: "#FFAACC",
    }
  }
}));

const Posts = (props) => {
  console.log('Posts Component');
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  let userId = props?.user.uid ? props?.user.uid : props.uid
  useEffect(() => {
    db.collection('users').doc(userId).collection('posts')
      .onSnapshot( posts => {
        let postsData =  posts.docs.map( post => {
          let data = post.data();
          let { id } = post 

          let payload = {
            id, ...data
          }
          // console.log(payload);
          return payload
        });

        setPosts(postsData);
      })
  }, [])

  return (
    <div className="posts_container">
      <div className='page_header_container'>
        <Typography component="div" variant='h4'>
          <Box fontWeight='fontWeightBold'>
            Posts
        </Box>
        </Typography>
      </div>
      <div className="articles_container">
        {
          _.map(posts, (article, idx) => {
            return (
              <PostSnippet
                key={idx}
                id={article.id}
                title={_.capitalize(article.title)}
                content={article.content.substring(0, 999)}
                user={props.user}
                uid={userId}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts
