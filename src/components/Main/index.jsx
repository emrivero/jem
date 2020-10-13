import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import useStyles from './styles';
import api from '../../controller/backend';
import Task from '../Task';

const Main = () => {
  const classes = useStyles();
  const { configuration: { tasks } } = api.cm;
  const [inputTask, setInputTask] = useState('');
  const [recordTask, setRecordTask] = useState('');
  const [viewTasks, setTasks] = useState(tasks);

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && inputTask !== '') {
      api.cm.addTask(inputTask);
      setInputTask('');
      setTasks(api.cm.configuration.tasks);
    }
  };

  const onRemove = (title) => () => {
    api.cm.removeTask(title);
    setTasks(api.cm.configuration.tasks);
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
                <IconButton color="inherit" aria-label="open menu" edge="end">
                  <Add />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {viewTasks.map((task) => (
          <Grid key={task} item md={3} sm={4} xs={6}>
            <Task
              title={task}
              remove={onRemove}
              status={recordTask === task ? 'recording' : 'paused'}
              toggle={onToggle}
              stop={onStop}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
