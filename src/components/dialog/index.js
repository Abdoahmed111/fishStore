import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { DialogTitle } from "@material-ui/core";

export default function AlertDialog({ open, handleClose, handleAgree }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Allow Fishstore.com to push notifications?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Fishstore.com wants to start sending you push notifications. Click
            Allow to subscribe.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No Thanks
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Allow
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
