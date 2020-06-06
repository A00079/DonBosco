import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import About from '../Navigations/About/About.js';
import Gallary from '../Navigations/Gallary/Gallary.js';
import LeftAngle from '../../../src/assets/img/leftangle.png';
import RightAngle from '../../../src/assets/img/rightangle.png';


const useStyles = makeStyles((theme) => ({
    cardroot: {
        minWidth: 275,
        borderRadius: '30px'
    },
    Gallary: {
        justifyContent: 'center',
        marginTop: '5%',
        background: '#fff !important'
    },
    cardcontainer: {
        height: '20em !important'
    },
    iconHolder: {
        justifyContent: 'center',
        background: '#fff'
    },
    icons: {
        height: '100px',
        width: '100px'
    },
    iconName: {
        textAlign: 'center'
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
    quotetext: {
        fontFamily: 'archia',
        color: '#fff',
        fontWeight: 'bolder',
        fontSize: '1.7vw',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '4.0vw',
        },
    },
    Welcom: {
        position: 'absolute',
        top: '60%'
    },
    welcomText: {
        fontFamily: 'archia',
        color: '#fff',
        margin: '20px',
        marginBottom: '0px'
    },
    welcomText2: {
        fontFamily: 'archia',
        color: '#fff',
        marginLeft: '22px'
    },
    angle1:{
        width:'200px',
        height: '200px',
        [theme.breakpoints.down('xs')]: {
            width:'100px',
            height: '100px',
        },
    },
    angle2:{
        width:'200px',
        height: '200px',
        [theme.breakpoints.down('xs')]: {
            width:'100px',
            height: '100px',
        },
    },
    xs_headQuote:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px'
        },
    },
    quotAuthor:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    }

}));

const GettingStarted = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <React.Fragment>
            <Grid
                className={classes.Welcom}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} md={12}>
                    <Typography className={classes.welcomText} variant="h3" component="h2">
                        WelCome
          </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography className={classes.welcomText2} variant="h6" component="h2">
                        Let's Get Started.
                </Typography>
                </Grid>
                <Grid className={classes.appQuotes} item xs={12} md={12}>
                    <Card className={classes.cardroot} elevation={0}>
                        <CardContent className={classes.cardcontainer}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={3} md={3} container className={classes.iconHolder}>
                                    <div>
                                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.icons}>
                                            B
                                    </Avatar>
                                        <p className={classes.iconName}>father</p>
                                    </div>
                                </Grid>
                                <Grid item xs={3} md={3} container className={classes.iconHolder}>
                                    <div>
                                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.icons}>
                                            B
                                    </Avatar>
                                        <p className={classes.iconName}>father</p>
                                    </div>
                                </Grid>
                                <Grid item xs={3} md={3} container className={classes.iconHolder}>
                                    <div>
                                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.icons}>
                                            B
                                    </Avatar>
                                        <p className={classes.iconName}>father</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} container className={classes.iconHolder}>
                    <Typography variant='h4' className={classes.xs_headQuote}>
                        And Known that I am With you always;yes, to the end of the time
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} container className={classes.iconHolder}>
                    <Typography variant='h6' className={classes.quotAuthor}>
                        Jesus Chirst
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} container className={classes.Gallary}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={4} md={4} container className={classes.iconHolder}>
                            <img src={LeftAngle} className={classes.angle1} />
                        </Grid>
                        <Grid item xs={4} md={4} container className={classes.iconHolder}>
                            <Typography variant='h2'>
                                Gallary
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={4} container className={classes.iconHolder}>
                            <img src={RightAngle} className={classes.angle2} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} container className={classes.Gallary}>
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default GettingStarted;