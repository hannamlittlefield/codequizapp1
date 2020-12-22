import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import QuestionCard from './QuestionCard';
import {Container} from '@material-ui/core';
import Footer from './Footer'

export default function QuizPage(){
    const [questions, setQuestions] = useState([])
    const [total, setTotal] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    /*
        changed state here for current to be the position in the quetions array
        we can update this state +1 when we manipulate the other pieces of state
    */
    const [currentQuestion, setCurrentQuestion] = useState(0) 

    useEffect(() => {
        fetch('content/html.json')
            .then(res => {return res.json()})
            .then(json => setQuestions(json))
    });

    // can be removed if business logic is not required to randomly select a question
    function randomQuestion() {
        console.log(questions.length)
        var questionNum = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions.indexOf(questionNum))
        console.log(currentQuestion)
        setQuestions(questions.splice(questionNum, 1))
        console.log(questions)
    }

    return(
        <React.Fragment>
            <NavBar/>
                <Container maxWidth="sm" className="marginspace">
                    <QuestionCard
                    question = {questions[currentQuestion]}
                    count = {total}
                    justify="center"/> 
                </Container>
            <Footer/>
        </React.Fragment>
    )
}

