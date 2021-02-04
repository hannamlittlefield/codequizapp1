import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import Home from './Home';
import {useHistory} from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';




export default function NavBar() {
  let history = useHistory();
  const handleOnClick = () => {
    history.push("/QuizPage");
  }
    return (
<AppBar position="static" className="Appbar">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h3" className="TitleText">
      <HomeOutlinedIcon fontSize="large" onClick={handleOnClick}/>Code Quiz App
    </Typography>

  </Toolbar>
</AppBar>
    );
}