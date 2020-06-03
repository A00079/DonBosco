import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DonBosco
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props)=> {
  const classes = useStyles();
  const [adminID, setadminID] = useState('');
  const [adminPass, setadminPass] = useState('');

  const handleSignin = () =>{
    console.log('adminID',adminID)
    console.log('adminPass',adminPass)
    console.log('UID...',uuid())
    localStorage.setItem("sessionid", uuid());
    
    if(adminID === 'Donbosco' && adminPass === 'Donbosco'){
        setTimeout(()=>{
            props.history.push('/Admin')
        },5000)
        toast.success('🦄All Good Getting Started', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }else{
        toast.error('Wrong Admin id OR Password !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log('Not Allowed')
    }
  }
  const handleadminID = (e) =>{
    console.log('AdminID', e.target.value)
    setadminID(e.target.value)
  }
  const handleadminPass = (e) =>{
    console.log('AdminPass', e.target.value)
    setadminPass(e.target.value)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={e=>handleadminID(e)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adminid"
            label="Admin ID"
            name="adminid"
            autoComplete="adminid"
            autoFocus
          />
          <TextField
            onChange={e=>handleadminPass(e)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignin}
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default withRouter(SignIn);