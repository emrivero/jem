import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { PlayArrow, Delete, Pause, Replay } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from './styles';
import { formatTime } from '../../controller/time';
import api from '../../controller/backend';

const Task = ({ title, remove, status, toggle, stop }) => {
  const classes = useStyles();
  const theme = useTheme();
  let [time, setTime] = useState(api.tr.record[title] || 0);
  const [idInterval, setIdInterval] = useState(null);
  const style = clsx({
    [classes.hidden]: status !== 'paused',
  });

  const innerToggle = () => {
    toggle(title);
    if (!idInterval) {
      const id = setInterval(() => {
        setTime(time += 1);
        api.ipcRenderer.send('save:time', title, time);
      }, 1000);
      setIdInterval(id);
    } else {
      clearInterval(idInterval);
      setIdInterval(null);
    }
  };

  useEffect(() => {
    if (status === 'paused') {
      clearInterval(idInterval);
      setIdInterval(null);
    }
  }, [status]);

  const onStop = () => {
    stop(title);
    setTime(0);
    api.ipcRenderer.send('save:time', title, 0);
    clearInterval(idInterval);
    setIdInterval(null);
  };

  return (
    <Grid item md={3} sm={4} xs={6}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" align="center" title={title}>
              {title}
            </Typography>
            <Typography variant="body1" align="center" style={{ fontFamily: theme.font.family.mono }}>
              {formatTime(time)}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="play/pause" onClick={innerToggle}>
              {status === 'paused'
                ? <PlayArrow style={{ color: theme.palette.green.main }} className={classes.playIcon} />
                : <Pause style={{ color: theme.palette.yellow.main }} className={classes.playIcon} />}
            </IconButton>
            <IconButton onClick={onStop}>
              <Replay style={{ color: theme.palette.black.main }} className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="remove" onClick={remove} className={style}>
              <Delete style={{ color: theme.palette.red.main }} className={classes.playIcon} />
            </IconButton>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default Task;
