import React from 'react';
import {CssBaseline, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '20px',
  }
});

export default function HomeText () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Typography component="div" style={{ backgroundColor: '#829CBC', height: '40vh' }}>
        <h1 className="TitleText">Quiz Machine</h1>
        <p>Test your knowledge!</p>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
