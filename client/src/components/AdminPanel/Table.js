import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete';

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

export default function BasicTable({editProduct, deleteProduct}) {
  const classes = useStyles();
  const productList = useSelector(state => state.products)
  const {products} = productList

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID&nbsp;</TableCell>
            <TableCell align="left">Name&nbsp;</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Brand&nbsp;</TableCell>
            <TableCell align="right">Category&nbsp;</TableCell>
            <TableCell align="right">In Stock&nbsp;</TableCell>
            <TableCell align="center">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.name}>
              <TableCell align="left">{product._id}</TableCell>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.brand}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.inStock}</TableCell>
              <TableCell align="center">
                <div>
                <Edit onClick = {() => editProduct(product)} 
                      style={{fill: '#f50057',
                              cursor: 'pointer',
                              marginRight: '.8rem'}}/>
                <Delete onClick = {() => deleteProduct(product)}
                        style={{fill: '#f50057',
                                cursor: 'pointer'}}/>
                </div>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


