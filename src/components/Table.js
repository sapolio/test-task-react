import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Data from '../dummy.json';
import Info from './info';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});


class DataTable extends React.Component {

  state = {
    sortBy: 'id',
    direction: 'asc',
    data: Data,
    rowSelected: null
  }

  handleSortClick = (by) => {
    let { direction } = this.state; 
    direction = direction == 'asc' ? 'desc' : 'asc';
    let data = this.state.data.slice().sort((a, b) => {
      if (a[by] == b[by]) return 0;
      if (direction == 'asc') return a[by] > b[by] ? -1 : 1;
      if (direction == 'desc') return a[by] < b[by] ? -1 : 1;
    })
    this.setState({
      sortBy: by,
      direction,
      data
    });
  }
  selectRow = (index) => {
    this.setState({rowSelected: index})
  }
  isRowSelected = (index) => index == this.state.rowSelected;

  render() {
    const { sortBy, direction, data, rowSelected: row } = this.state;

    return (
      <React.Fragment>
      {row != null && 
          <Info 
            userName={data[row].firstName + ' ' + data[row].lastName}
            description={data[row].description}
            address={data[row].address}
          />
      }
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy == 'id'}
                  direction={direction}
                  onClick={() => this.handleSortClick('id')}>
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy == 'firstName'}
                  direction={direction}
                  onClick={() => this.handleSortClick('firstName')}>
                  First name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy == 'lastName'}
                  direction={direction}
                  onClick={() => this.handleSortClick('lastName')}>
                  Last name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy == 'email'}
                  direction={direction}
                  onClick={() => this.handleSortClick('email')}>
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy == 'phone'}
                  direction={direction}
                  onClick={() => this.handleSortClick('phone')}>
                  Phone
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index )=> {
              const isRowSelected = this.isRowSelected(index)
              return (
                <TableRow
                  onClick={() => this.selectRow(index)}
                  key={row.id}
                  hover
                  selected={isRowSelected}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                </TableRow>);
            })}
          </TableBody>
        </Table>
      </Paper>
      </React.Fragment>
      );
  };
}


export default withStyles(styles)(DataTable);
