import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AllowNotification from '../Notification/AskNotification.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [showpopup, setPopup] = React.useState(false);

  const classes = useStyles();

  useEffect(() => {
    setOpen(props.open);
  }, [props])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscription = () => {
    setPopup(true)
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        disableBackdropClick
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Allow Notification ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please allow <b>Don Bosco</b> to send you Notifications. If already allowed please igoner this message.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ignore
          </Button>
          <Button onClick={handleSubscription} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        {
          (showpopup) ? <AllowNotification /> : <div></div>
        }
      </div>
    </div>
  );
}
