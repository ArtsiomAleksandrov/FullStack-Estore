import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function BasicTable({payment}) {
  
  const classes = useStyles();


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Payment Id</TableCell>
            <TableCell align="center">Payer Id</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {payment.payments.map(payment => (
                  <StyledTableRow>
                  <TableCell align="center">{payment.payment.paymentID}</TableCell>
                  <TableCell align="center">{payment.payment.payerID}</TableCell>
                  <TableCell align='center'>{payment.payment.totalPrice}$</TableCell>
                  <TableCell align="center">{payment.payment.totalQuantity}</TableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}