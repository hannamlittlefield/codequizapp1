import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === '') {
      setHelperText('Please select an answer.');
      setError(true);
    } else if (value === htmlQuestion.correctAnswer) {
      setHelperText('Nice job!');
      setError(false);
    } else {
      setHelperText('Sorry, wrong answer.');
      setError(true);
    }
  };

  const htmlQuestion = {question: "What does HTML stand for?",
    correctAnswer: 'Hyper Text Markup Language',
    possibleAnswer: ['Home Typing Markup Lingo', 'Hyper Text Markup Language', 'Hyper Typed Making Language']}

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">{htmlQuestion.question}</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
        {htmlQuestion.possibleAnswer.map(possible => {
            return <FormControlLabel value={possible} control={<Radio />} label={possible}/>;})
        }
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
      }
/* array w correct possible answers and map it, assign correct answer to form control label. 
/* get value of what they chose and compare to correct value 
radio button value - loop through array to change value color */