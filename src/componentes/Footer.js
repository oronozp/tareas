import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    marginTop:"20px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default Footer;
