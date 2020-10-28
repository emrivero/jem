import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import useStyles from './styles';
import Report from './Report';

const Hours = ({ display }) => {
  const classes = useStyles();
  const [date, setDate] = useState({});

  const handleChange = (evt) => {
    const { value } = evt.target;

    const year = value.split('-')[0];
    const week = value.split('-')[1].slice(1);

    setDate({ year, week });
  };

  return (
    <div className={classes.root} style={{ display: display ? '' : 'none' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="week"
            label="Semana"
            type="week"
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Report
          week={date.week}
          year={date.year}
        />
      </Grid>
    </div>
  );
};

export default Hours;
