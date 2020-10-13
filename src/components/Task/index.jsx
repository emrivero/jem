import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { PlayArrow, Delete, Pause, Replay } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from './styles';
import Timer from '../../controller/timer';
import api from '../../controller/backend';

const Task = ({ title, remove, status, toggle, stop }) => {
  const { tr } = api;
  const classes = useStyles();
  const theme = useTheme();
  const [time, setTime] = useState(Timer.getTime(tr.record[title]));
  const timer = useRef(new Timer(setTime, tr.record[title])).current;
  const didMountRef = useRef(false);
  const stopRef = useRef(false);

  const style = clsx({
    [classes.hidden]: status !== 'paused',
  });

  const innerToggle = () => {
    stopRef.current = false;
    toggle(title);
  };

  useEffect(() => {
    if (didMountRef.current) {
      if (!stopRef.current) {
        timer.playPause(title);
      }
    } else {
      didMountRef.current = true;
    }
  }, [status]);

  const onStop = () => {
    stopRef.current = true;
    stop(title);
    timer.stop(title);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography style={{ whiteSpace: 'nowrap' }} component="h5" variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="body1" align="center" style={{ fontFamily: theme.font.family.mono }}>
            {time}
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
          <IconButton aria-label="remove" onClick={remove(title)} className={style}>
            <Delete style={{ color: theme.palette.red.main }} className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default Task;
