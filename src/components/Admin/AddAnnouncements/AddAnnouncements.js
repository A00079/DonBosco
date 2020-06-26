import React, {useState,useRef} from 'react';
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
import AnnouncementRest from '../../../REST/AnnouncementREST.js';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Don Bosco
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [announcement, setAnnouncement] = useState('');
    const [announceTitle, setannounceTitle] = useState('');
    const [announceName, setannounceName] = useState('');
    const [announceDate, setannounceDate] = useState('');
    const [isdisable, setisdisable] = useState('');
    const [isannouncement, setisannouncement] = useState(false);


    const handleAnnouncement = (e) =>{
        if(e.target.value){
            setisannouncement(false)
        }
        setAnnouncement(e.target.value)
    }
    const handleAnnounceDate = (e) =>{
        const currentdate = e.target.value;
        validateDate(currentdate);
        console.log('Announcement Date', e.target.value)
        setannounceDate(e.target.value)
    }
    const validateDate = (currentdate) =>{

        var selectedDate = new Date(currentdate);
        var now = new Date();
        if(!selectedDate < now){
            setisdisable(false)
        }else{
            setisdisable(true)
            toast.error('Past Dates Not Allowed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const handleAnnounceTitle = (e) =>{
        console.log('Announcement Title', e.target.value)
        setannounceTitle(e.target.value)
    }

    const handleAnnounceName = (e) =>{
        console.log('Announcement Name', e.target.value)
        setannounceName(e.target.value)
    }
    const PostAnnouncement = () =>{
        let api_url = "api/admin/announcement/create";
        let data = {
            'Title': announceTitle,
            'Name': announceName,
            'Message': announcement,
            'Date': announceDate
        }
        if(data.Message !=''){
            AnnouncementRest
            .postAnnouncementdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
                document.getElementById('Title').value = '';
                document.getElementById('outlined-adornment-amount').value = '';
                document.getElementById('Announcement').value = '';
                document.getElementById('date').value = '';
                toast.success('Announcement Posted Successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        }else{
            setisannouncement(true)
            toast.error('Announcement Can Not Be Empty.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        
        console.log('save data',data)
    }

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add Announcements
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={e=>handleAnnounceTitle(e)}
                                    autoComplete="Title"
                                    name="Title"
                                    variant="outlined"
                                    fullWidth
                                    id="Title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl
                            id='Name'
                            onChange={e=>handleAnnounceName(e)}
                            fullWidth className={classes.margin} variant="outlined">
                                <InputLabel
                                
                                 htmlFor="outlined-adornment-amount"
                                 >Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">fr.</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                error={isannouncement}
                                onChange={e=>handleAnnouncement(e)}
                                id="Announcement"
                                label="Announcement"
                                required
                                multiline
                                rows={4}
                                fullWidth
                                name="Announcement"
                                defaultValue=""
                                variant="outlined"
                                autoComplete="Announcement"
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={isdisable}
                                    onChange={e=>handleAnnounceDate(e)}
                                    id="date"
                                    fullWidth
                                    variant="outlined"
                                    label="Announce Date"
                                    type="date"
                                    minDate={new Date()}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={isdisable}
                            onClick={() => PostAnnouncement()}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Post Announcement
                        </Button>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
                <ToastContainer />
            </Container>
    );
}