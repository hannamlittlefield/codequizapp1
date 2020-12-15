import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import AppBar from './AppBar'
import QuestionCard from './QuestionCard';
import {Container} from '@material-ui/core';
import Footer from './Footer'

export default function QuizPage(){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('content/html.json')
            .then(res => {return res.json()})
            .then(json => setQuestions(json)
        );
    }, []);

    console.log(questions);

    return(
    <React.Fragment>
    <AppBar/>
    <Container maxWidth="sm" className="marginspace">
    <QuestionCard
    justify="center"/>
    </Container>
    <Footer/>
    </React.Fragment>
    )
}