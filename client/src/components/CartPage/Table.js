import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from './CartPage.module.css'
import Select from '../shared/Select'


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

export default function BasicTable({cartItems, onRemove, onSelectChange}) {
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image&nbsp;</TableCell>
            <TableCell align="center">Name&nbsp;</TableCell>
            <TableCell align="center">Price&nbsp;</TableCell>
            <TableCell align="center">Quantity&nbsp;</TableCell>
            <TableCell align="center">Remove From Cart&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <StyledTableRow key = {item.name}>
              <TableCell align="center"><img className = {styles.cartProductImage}src = {item.image} alt = '#'/></TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.price}</TableCell>
              <TableCell align='center'>
              <Select inStock = {item.inStock} helperText = {'Change product quantity'} onChange = {e => onSelectChange(item.product, e)} value = {item.qty}/>
              </TableCell>
              <TableCell align="center">
                <Button onClick = {() =>onRemove(item.product)}  variant="contained" color="secondary" 
                        style = {{
                                textTransform: 'capitalize', 
                                fontWeight: 'lighter',
                                }} >
                    Remove
                </Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}