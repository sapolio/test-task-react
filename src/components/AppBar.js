import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Тестовое задание
          </Typography>

          <Button variant="raised" className={classes.button}>
            Загрузить данные
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
}


export default withStyles(styles)(ButtonAppBar);
