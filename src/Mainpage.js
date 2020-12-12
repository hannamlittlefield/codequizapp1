import React from 'react'
import {Grid} from '@material-ui/core';
import QuizCard from './QuizCard.js'
import cssphoto from "./image/cssphoto.jpg"
import htmlphoto from "./image/htmlphoto.jpg"
import jsphoto from "./image/jsphoto.jpg"
import Paragraph from './Paragraph'
import AppBar from './AppBar'

function Mainpage() {
    return (
        <React.Fragment>
        <AppBar/>
        <Paragraph/>
        <Grid 
        style= {{gap: '1em'}}
        container
        direction="row"
        justify="center"
        className="marginspace"
        >
        <QuizCard
        title= "HTML"
        paragraph= 'Hypertext Markup Language'
        image={htmlphoto}
        />
       <QuizCard
       title= "CSS"
       paragraph= "Cascading Style Sheets"
       image={cssphoto}
       />
       <QuizCard
       title= "Javascript"
       paragraph= "Object-oriented computer programming"
       image={jsphoto}
       />
       {/*<QuizCard
       title= "Random"
       paragraph= "Random quiz questions"
       />*/}
        </Grid>
        </React.Fragment>
    );
}

export default Mainpage;