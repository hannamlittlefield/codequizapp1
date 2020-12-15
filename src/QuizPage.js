import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import AppBar from './AppBar'
import QuestionCard from './QuestionCard';
import {Container} from '@material-ui/core';
import Footer from './Footer'
import json from "./content/html.json" 

export default function QuizPage(){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(json).then(data => console.log(JSON.stringify(data)));
    }, []);

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