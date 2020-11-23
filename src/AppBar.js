import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'


function Appbar() {
    return (
<AppBar position="static" className="Appbar">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6">
      Code Quiz App
    </Typography>
  </Toolbar>
</AppBar>
    );
}
export default Appbar;