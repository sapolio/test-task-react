import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function Info(props) {
  const { classes, userName, description, address  } = props;
  
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography>
          Выбран пользователь: <b>{userName}</b>
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
        <Typography>
          {`${address.streetAddress}
          ${address.sity}
          ${address.state}
          ${address.zip}`}
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Info);

// // Выбран пользователь <b>Sue Corson</b>
// Описание:
// <textarea>
//   et lacus magna dolor...
// </textarea>
// Адрес проживания: <b>9792 Mattis Ct</b>
// Город: <b>Waukesha</b>
// Провинция / штат: <b>WI</b>
// Индекс: <b>22178</b>

// "streetAddress": "1197 Dui St",
//   "city": "Delray",
//     "state": "KY",
//       "zip": "35919"