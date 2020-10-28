import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import useStyles from './styles';

export default function Menu({ onChange }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('Tareas');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clickOnItem = ({ text, path }) => () => {
    setTitle(text);
    setOpen(false);
    onChange(path);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
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
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {[
            { text: 'Tareas', path: '/', icon: '' },
            { text: 'Horas', path: '/hours', icon: '' },
            { text: 'Configuración', path: '/configuration', icon: '' },
            { text: 'Acerca de', path: '/about', icon: '' },
          ].map((opt) => (
            <ListItem key={opt.text} onClick={clickOnItem(opt)} button>
              <ListItemText primary={opt.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
