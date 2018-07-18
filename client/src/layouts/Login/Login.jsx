import React, { Component } from 'react';
import { FormControl, TextField, Grid, Paper } from '@material-ui/core';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={10} md={4}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
