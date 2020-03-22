import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@reach/router';
import db from '../../firebase'

const useStyles = makeStyles((theme) => ({
  postSnippetContainer: {
    "& .MuiCardHeader-root": {
      backgroundColor: "#FFAACC",
    },
    marginBottom: theme.spacing(4),
  }
}));

const PostSnippet = (props) => {
  const classes = useStyles();

  const onDeletePost = () => {
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.id);
    postRef.delete();
  };

  return (
    <div className={classes.postSnippetContainer}>
      <Card>
        <CardHeader 
          title={props.title} 
          subheader={props.user 
            ? 
            <div style={{float:'right'}}>
              <Link to={`/blogs/${props.uid}/post/${props.id}`}>Read Full Article</Link>
              <Link to={`/update_post/${props.id}`} style={{marginLeft:"20px"}}>Edit Post</Link>
              <Link to={`/posts`} onClick={onDeletePost} style={{marginLeft:"20px"}}>Delete Post</Link>
            </div> 
            :
            <Link to={`/blogs/${props.uid}/post/${props.id}`}>Read Full Article</Link>
          } />
        <CardContent>
          <p className="articleContent">
            {
              props.content.split('\n').map((paragraph, idx) => {
                return (
                  <p key={idx}> {paragraph} </p>
                )
              })
            }
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PostSnippet;
