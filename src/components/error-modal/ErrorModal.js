import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";

import { getControls } from "../../actions/index";
import "./ErrorModal.scss";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ErrorModal({ isOpen, onTryAgain }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    onTryAgain();
    setOpen(false);
    dispatch(getControls());
  };

  const handleTryAgain = () => {
    onTryAgain();
  };

  //   const body = (

  //   );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="contianer">
            <div className="error-title">ERROR </div>
            <div className="error-description">UNABLE TO LOAD CONTROLS</div>
            <div className="button-container">
              <button className="btn-try-again" onClick={handleTryAgain}>
                TRY AGAIN
              </button>
            </div>
            {/* <SimpleModal /> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}
