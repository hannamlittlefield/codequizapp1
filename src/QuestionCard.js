import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioButton from './RadioButton'

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

export default function QuestionCard({count, question}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}
    justify="center">
      <CardContent>
      <p>{count}</p>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <RadioButton
        htmlQuestion = {question}/>
      </CardActions>
    </Card>
  );
}