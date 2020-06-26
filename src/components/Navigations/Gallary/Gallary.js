import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const About = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4} md={4} container>
                </Grid>
                <Grid item xs={4} md={4} container>
                    <Typography variant='h2'>
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} container>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default About;