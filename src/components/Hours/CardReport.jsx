import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const CardReport = ({ title, time }) => {
  const classes = useStyles();

  return (
    <Grid item md={2} sm={3} xs={6}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" align="center" title={title}>
              {title}
            </Typography>
            <Typography variant="body1" align="center">
              {time}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default CardReport;
