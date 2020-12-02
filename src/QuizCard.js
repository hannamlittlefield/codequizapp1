import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function QuizCard ({title, paragraph, image}) {
  const classes = useStyles();

    return (
        <Card className={classes.root}
        >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image= {image}
            title= {title}
            className= {classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className="TitleText">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {paragraph}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="lg" className="cardbutton">
            Start Quiz!
          </Button>
        </CardActions>
      </Card>

    );
}

export default QuizCard