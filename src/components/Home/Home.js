import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quotes from '../Quotes/Quotes.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appQuotes: {
      justifyContent: 'center'
    },
    parentQuotes: {
      position: 'absolute',
      top: '111px'
    },
    quotetext: {
      fontFamily: 'archia',
      color: '#fff',
      fontWeight: 'bolder',
      fontSize: '1.7vw',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '4.0vw',
      },
    }
  }));

const Home = () => {
  const classes = useStyles();

    return (
        <React.Fragment>
            <div className="BackImg">
            </div>
            <Grid
                className={classes.parentQuotes}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid className={classes.appQuotes} container item xs={12} spacing={3}>
                    <Typography className={classes.quotetext} variant="subtitle1" component="h2">
                        <Quotes />
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home;