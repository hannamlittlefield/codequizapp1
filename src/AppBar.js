import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import Mainpage from './Mainpage';
import ReactDOM from 'react-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


function Appbar() {
  const handleOnClick = () => {
    ReactDOM.render(
      <Mainpage />, 
    document.getElementById('root')
    )
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
export default Appbar;