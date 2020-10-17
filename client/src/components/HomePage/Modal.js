import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: 'none',
    outline: 'none'
  },
  backDrop: {
    background: 'rgba(255,255,255,0.2)'
  }
}));

export default function TransitionsModal({open, handleOpen, handleClose}) {
  const classes = useStyles();
  

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        PaperProps = {{
          classes: {
            root: classes.paper
          }
        }}
        BackdropProps= {{
          classes: {
              root: classes.backDrop
          }
      }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Added To Cart</h2>
            <p id="transition-modal-description">Product is in the cart now.</p>
            <button onClick = {handleClose}>Ok</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
