import React, {useEffect,useState} from 'react';
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

export default function AcccessibleTable() {
  const classes = useStyles();

  const [announcements, setannouncement] = useState([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() =>{
    setOpen(!open)
    console.log('View all Announcements')
    let api_url = "api/admin/announcement/read";

    AnnouncementRest
    .getAnnouncementsList(api_url)
    .then((res) =>{
        console.log('All Announcements',res)
        setannouncement(res)
        console.log('announcements',announcements)
        setOpen(false)
    })
  },[])
  const deleteAnnouncement = (Annonce_id) =>{
    console.log('Annonce_id',Annonce_id)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Announcements</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {announcements.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                Message
              </TableCell>
              <TableCell align="right">{row.Message}</TableCell>
              <TableCell title='Delete' align="right"><DeleteOutlinedIcon onClick={deleteAnnouncement(row._id)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </TableContainer>
  );
}