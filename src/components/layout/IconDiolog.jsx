import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ForestIcon from "@mui/icons-material/Forest";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function IconDiolog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClickOpen}
        sx={{
          height: "70px",
          width: "70px",
        }}
      >
        <ForestIcon
          style={{
            width: "70px",
            height: "70px",
            color: "#339933",
            fontSize: "70px",
          }}
        />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Garden Discounts: Your Ultimate Destination for Amazing Deals
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Welcome to Garden Discounts, the ultimate online platform for all
            your discount needs! Our website is dedicated to helping you save
            money while shopping for all your gardening needs.
          </Typography>
          <Typography gutterBottom>
            At Garden Discounts, we understand that gardening can be an
            expensive hobby, especially when buying plants, tools, and
            accessories. That's why we have curated a wide range of partnerships
            with top brands and retailers to bring you exclusive discounts and
            deals.
          </Typography>
          <Typography gutterBottom>
            Our site features a user-friendly interface that makes it easy for
            you!!!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Let's go !!!
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default IconDiolog;
