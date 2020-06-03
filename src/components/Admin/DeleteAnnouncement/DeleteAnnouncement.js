import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AnnouncementRest from '../../../REST/AnnouncementREST.js';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable(props) {
  const classes = useStyles();

  const [announcements, setannouncement] = useState([]);
  const [Editannouncements, setEditannouncements] = useState([]);

  const [open, setOpen] = React.useState(false); const [announcement, setAnnouncement] = useState('');
  const [announceTitle, setannounceTitle] = useState('');
  const [announceName, setannounceName] = useState('');
  const [announceDate, setannounceDate] = useState('');
  const [isdisable, setisdisable] = useState('');
  const [isannouncement, setisannouncement] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [UpdateAnnouncementtext,setUpdateAnnouncement] = useState('');

  useEffect(() => {
    setOpen(!open)
    console.log('View all Announcements')
    let api_url = "api/admin/announcement/read";

    AnnouncementRest
      .getAnnouncementsList(api_url)
      .then((res) => {
        console.log('All Announcements', res)
        setannouncement(res)
        console.log('announcements', announcements)
        setOpen(false)
      })
  }, []);
  const deleteAnnouncement = (Annonce_id) => {
    setOpen(!open)
    let api_url = 'api/admin/announcement/delete';
    let data = {
      'id': Annonce_id.toString()
    }
    AnnouncementRest
      .deleteAnnouncements(api_url, data)
      .then(response => {
        let api_url = "api/admin/announcement/read";
        AnnouncementRest
          .getAnnouncementsList(api_url)
          .then((res) => {
            setannouncement(res)
            console.log('announcements', announcements)
          })
        console.log("Response Data...", response);
        setOpen(false)

      });
    console.log('Annonce_id', Annonce_id)
  }
  const handleClose = () => {
    setOpenModal(false);
  };
  const editAnnouncement = (editData) => {
    setOpenModal(true)
    console.log('Edit Data', editData);
    setEditannouncements(editData)
  }
  const handleAnnounceTitle = (e) => {
    console.log('Announcement Title', e.target.value)
    setannounceTitle(e.target.value)
  }

  const handleAnnounceName = (e) => {
    console.log('Announcement Name', e.target.value)
    setannounceName(e.target.value)
  }
  const handleAnnouncement = (e) => {
    console.log('Announcement', e.target.value)
      setisannouncement(false)
      setUpdateAnnouncement(e.target.value);
    
  }
  const handleAnnounceDate = (e) => {
    const currentdate = e.target.value;
    validateDate(currentdate);
    console.log('Announcement Date', e.target.value)
    setannounceDate(e.target.value)
  }
  const validateDate = (currentdate) => {

   var selectedDate = new Date(currentdate);
   var now = new Date();
    if (selectedDate < now) {
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
    } else {
      setisdisable(false)
      
    }
  }
  const PostAnnouncement = () => {
    let api_url = "api/admin/announcement/update";
    let data = {
      'Title': (announceTitle)?announceTitle : Editannouncements.Title ,
      'Name': (announceName)?announceName :Editannouncements.Name  ,
      'Message': (UpdateAnnouncementtext)? UpdateAnnouncementtext : Editannouncements.Message,
      'Date': (announceDate)? announceDate :  Editannouncements.Date,
      'id': Editannouncements._id
    }
    console.log('data formed',data)
    if (data.Message != '') {
      AnnouncementRest
        .updateAnnouncementdetails(api_url, data)
        .then(response => {
          console.log("Response Data...", response);
          document.getElementById('Title').value = '';
          document.getElementById('outlined-adornment-amount').value = '';
          document.getElementById('Announcement').value = '';
          document.getElementById('date').value = '';
          toast.success('Announcement Updated Successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
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

    console.log('save data', data)
  }

  return (
    <React.Fragment>
      <h4>Management Announcements</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Announcement</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {announcements.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.Title}</TableCell>
                <TableCell align="right">{row.Message}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell title='Edit' align="right"><EditIcon onClick={() => editAnnouncement(row)} /></TableCell>
                <TableCell title='Delete' align="right"><DeleteOutlinedIcon onClick={() => deleteAnnouncement(row._id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </TableContainer>
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Announcement</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handleAnnounceTitle(e)}
                  autoComplete="Title"
                  name="Title"
                  variant="outlined"
                  fullWidth
                  id="Title"
                  label="Title"
                  autoFocus
                  value={(announceTitle)?announceTitle : Editannouncements.Title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  id='Name'
                  onChange={e => handleAnnounceName(e)}
                  fullWidth className={classes.margin} variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                  >Name</InputLabel>
                  <OutlinedInput
                    value={(announceName)? announceName : Editannouncements.Name}
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">fr.</InputAdornment>}
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={isannouncement}
                  onChange={e => handleAnnouncement(e)}
                  id="Announcement"
                  label="Announcement"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  value={(UpdateAnnouncementtext)? UpdateAnnouncementtext : Editannouncements.Message}
                  name="Announcement"
                  defaultValue=""
                  variant="outlined"
                  autoComplete="Announcement"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={(announceDate)? announceDate : Editannouncements.Date}
                  error={isdisable}
                  onChange={e => handleAnnounceDate(e)}
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

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={isdisable}
            onClick={() => PostAnnouncement()}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Post Announcement
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />

    </React.Fragment>
  );
}
