import React from 'react';
import ReactDOM from 'react-dom'
import AppBar from './AppBar'
import QuestionCard from './QuestionCard';

export default function QuizPage(){
    return(
    <React.Fragment>
    <AppBar/>
    <QuestionCard/>
    </React.Fragment>
    )
}