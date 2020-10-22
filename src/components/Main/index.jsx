import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import useStyles from './styles';
import api from '../../controller/backend';
import Task from '../Task';
import ConfirmDialog from '../ConfirmDialog';

const Main = () => {
  const classes = useStyles();
  const { configuration: { tasks } } = api.cm;
  const [inputTask, setInputTask] = useState('');
  const [recordTask, setRecordTask] = useState('');
  const [viewTasks, setTasks] = useState(tasks);
  const [optDialog, setOptDialog] = useState({ open: false, id: '' });

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && inputTask !== '') {
      api.cm.addTask(inputTask);
      setInputTask('');
      setTasks(api.cm.configuration.tasks);
    }
  };

  const onClick = () => {
    if (inputTask !== '') {
      api.cm.addTask(inputTask);
      setInputTask('');
      setTasks(api.cm.configuration.tasks);
    }
  };

  const openDialog = (task) => {
    setOptDialog({
      open: true,
      id: task,
    });
  };

  const onResponse = (flag, task) => {
    if (flag) {
      api.cm.removeTask(task);
      setTasks(api.cm.configuration.tasks);
    }
    setOptDialog({ open: false });
  };

  const onToggle = (task) => {
    let newTask = '';
    if (recordTask !== task) {
      newTask = task;
    }
    setRecordTask(newTask);
    return newTask;
  };

  const onStop = (task) => {
    if (recordTask === task) {
      setRecordTask('');
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.containerInput}>
                <TextField
                  value={inputTask}
                  id="outlined-basic"
                  label="Tarea"
                  variant="outlined"
                  fullWidth
                  placeholder="Añade tarea o proyecto"
                  onInput={(e) => setInputTask(e.target.value)}
                  onKeyPress={onKeyPress}
                />
                <IconButton color="inherit" aria-label="open menu" edge="end" onClick={onClick}>
                  <Add />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {viewTasks.map((task) => (
          <Task
            key={task}
            title={task}
            remove={() => openDialog(task)}
            status={recordTask === task ? 'recording' : 'paused'}
            toggle={onToggle}
            stop={onStop}
          />
        ))}
      </Grid>
      <ConfirmDialog
        open={optDialog.open}
        id={optDialog.id}
        title="Borrar tarea"
        message="¿Está seguro?"
        handleClose={() => setOptDialog({ open: true })}
        handleResponse={onResponse}
      />
    </div>
  );
};

export default Main;
