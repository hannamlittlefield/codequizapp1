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
    const [currentQuestion, setCurrentQuestion] = useState({}) 

    useEffect(() => {
        fetch('content/html.json')
            .then(res => {return res.json()})
            .then(json => setQuestions(json))
    }, []);

function randomQuestion() {
   var questionNum = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[questionNum])
console.log(currentQuestion)
setQuestions(questions.splice(questionNum, 1))
}

    return(
    <React.Fragment>
    <NavBar/>
    <Container maxWidth="sm" className="marginspace">
    {randomQuestion() && <QuestionCard
    question = {currentQuestion}
    count = {total}
    justify="center"/>}
    </Container>
    <Footer/>
    </React.Fragment>
    )
}

