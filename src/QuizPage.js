import React from 'react';
import ReactDOM from 'react-dom'
import AppBar from './AppBar'
import QuestionCard from './QuestionCard';
import {Container} from '@material-ui/core';

export default function QuizPage(){
    return(
    <React.Fragment>
    <AppBar/>
    <Container maxWidth="sm" className="marginspace">
    <QuestionCard
    justify="center"/>
    </Container>
    </React.Fragment>
    )
}