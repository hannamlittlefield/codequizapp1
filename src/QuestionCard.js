import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioButton from './RadioButton'
import QuizResults from './QuizResults'
import ReactDOM from 'react-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuestionCard({count, question, handleSubmit, error, value, helperText, handleRadioChange}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const handleOnClick = () => {
    ReactDOM.render(
      <QuizResults />, 
    document.getElementById('root')
    )
  }
  return (
    <Card className={classes.root}
    justify="center">
    <Button
      justify="left"
      className="cardbutton"
      onClick={handleOnClick}
      >Quit</Button>
      <CardContent>
      <p>{count}</p>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <RadioButton
        htmlQuestion = {question}
        handleSubmit = {handleSubmit}
        error={error}
        value={value}
        helperText={helperText}
        handleRadioChange={handleRadioChange}/>
      </CardActions>
    </Card>
  );
}