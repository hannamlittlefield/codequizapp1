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
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
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

  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === '') {
      //  setHelperText('Please select an answer.');
        setError(true);
      } else if (value === questions[currentQuestion].correctAnswer) {
      // setHelperText('Nice job!');
        setError(false);
      } else {
      //  setHelperText('Sorry, wrong answer.');
        setError(true);
      }
    };

    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
   if (questions.length !== 0) { return( 
       <React.Fragment>
              <NavBar/>
                <Container maxWidth="sm" className="marginspace">
                    <QuestionCard
                    question = {questions[currentQuestion]}
                    handleSubmit = {handleSubmit}
                    error={error}
                    count = {total}
                    value={value}
                    helperText={helperText}
                    handleRadioChange={handleRadioChange}
                    justify="center"/> 
                </Container>
            <Footer/>
        </React.Fragment>
    )} else {
      return <React.Fragment>
      <p>error</p>
      </React.Fragment>
    }
}
