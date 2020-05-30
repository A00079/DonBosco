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

const useStyles = makeStyles((theme) => ({
    cardroot: {
        minWidth: 275,
        borderRadius: '30px'
    },
    cardcontainer: {
        height: '100px !important'
    },
    iconHolder: {
        justifyContent: 'center'
    },
    icons: {
        height: '80px',
        width: '80px'
    },
    iconName:{
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
    }
}));

const GettingStarted = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid
            className={classes.Welcom}
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} md={12}>
                <Typography className={classes.welcomText} variant="h3" component="h2">
                    WelCom
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
                                    <Avatar alt="Remy Sharp" src="../../..assets/img/Demo.png.jpg" className={classes.icons}>
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
        </Grid>
    )
}

export default GettingStarted;