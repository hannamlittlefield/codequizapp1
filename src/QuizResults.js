import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import {Card, CardActionArea, CardActions, CardContent, Button} from '@material-ui/core'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home'
import {Container} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

export default function QuizResults(){
    const classes = useStyles();

    const handleOnClick = () => {
        ReactDOM.render(
          <Home />, 
        document.getElementById('root')
        )
      }
    return(
        <React.Fragment>
        <NavBar/>
        <Container maxWidth="sm" className="marginspace">
        <Card className={classes.root}
        justify="center"
        >
        <CardActionArea>
          <CardContent>
            <p>Results go here</p>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="large" className="cardbutton" onClick={handleOnClick}>
           Home
          </Button>
        </CardActions>
      </Card>
      </Container>
        <Footer/>
        </React.Fragment>
    )
}