import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AppNav = (props) => {
  const [value, setValue] = useState(0)
  let userId = props?.user.uid ? props?.user.uid : props.uid

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app_main_navigation">
        <Tabs
          value={0}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {props.user &&
            <div>
              <Tab label="Posts" icon={<DescriptionIcon />}  component="a" href={`/blogs/${userId}/posts`}/>
              <Tab label="Create Post" icon={<PostAddIcon />} component="a" href="/create_post" />
            </div>
          }
          {!props.user
            ?
            <Tab label="Sign In" icon={<ExitToAppIcon />} component="a" href="/sign_in/" />
            :
            <Tab label="Sign Out" icon={<ExitToAppIcon />} onClick={props.onSignOut} />
          }
        </Tabs>
      </div>
  )
}

export default AppNav
