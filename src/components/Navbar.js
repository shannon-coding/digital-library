import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton} from '@material-ui/core/';
import {ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core/';

import { BookmarkBorder, HomeOutlined, ContactMail, Business} from '@material-ui/icons';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'transparent',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  button:{
    padding:theme.spacing(1),
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    marginLeft:theme.spacing(4),
    marginRight:theme.spacing(4),
  },
}));

export default function Navbar({siteTitle}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="textPrimary" variant="h6" noWrap>
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Button className={classes.button} variant="outlined" color="secondary">
          Sign-up/Login
        </Button>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><HomeOutlined /></ListItemIcon>
            <ListItemText secondary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Business /></ListItemIcon>
            <ListItemText secondary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BookmarkBorder /></ListItemIcon>
            <ListItemText secondary="Library" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ContactMail /></ListItemIcon>
            <ListItemText secondary="Contact" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}