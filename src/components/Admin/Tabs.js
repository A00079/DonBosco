import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddAnnouncements from './AddAnnouncements/AddAnnouncements.js';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ViewAnnouncements from '../Admin/ViewAllAnnouncements/ViewAllAnnouncements.js';
import ActionAnnouncements from '../Admin/DeleteAnnouncement/DeleteAnnouncement.js';

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    Tostroot: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Add Announcements " {...a11yProps(0)} />
                    <Tab label="View All Announcements" {...a11yProps(1)} />
                    <Tab label="Actions" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.Tostroot}>
                    <Collapse in={open}>
                    <Alert
                     severity="warning"
                     action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                     >
                        <AlertTitle>Warning</AlertTitle>
                        Please Re-Check Your Announcement Before Posting it ! — <strong>Once Posted Can Be Viewed By Users. </strong>
                    </Alert>
                    </Collapse>
                </div>
                <AddAnnouncements />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className={classes.Tostroot}>
                    <Collapse in={open}>
                    <Alert
                     severity="info"
                     action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                     >
                        <AlertTitle>Info</AlertTitle>
                        Announcements Inserted Appears Here — <strong>To View All Announcements Just Scroll Down. </strong>
                    </Alert>
                    </Collapse>
                </div>
               <ViewAnnouncements />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ActionAnnouncements />
            </TabPanel>
        </div>
    );
}
