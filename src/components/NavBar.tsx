import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { NavBarEnum } from "../utils/enums";
import { text } from "../utils/constants";
import Switch from "@material-ui/core/Switch";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../style/theme";

const useStyles = makeStyles((theme) => ({
  navbar: {
    margin: "auto",
  },
}));

const NavBar = () => {
  const { Home, Programs, About, Logout } = NavBarEnum;

  const classes = useStyles();
  const location = useLocation();

  const currentNavBarStyle = (path: string) => {
    if (location.pathname === path)
      return {
        color: "#f6c90e",
      };
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <Button
          color="inherit"
          style={currentNavBarStyle("/")}
          component={Link}
          to={text.paths.home}
        >
          {Home}
        </Button>
        <Button
          color="inherit"
          component={Link}
          style={currentNavBarStyle("/programs")}
          to={text.paths.programs}
        >
          {Programs}
        </Button>
        <Button
          color="inherit"
          style={currentNavBarStyle("/about")}
          component={Link}
          to={text.paths.about}
        >
          {About}
        </Button>
        <Button
          color="inherit"
          style={currentNavBarStyle("/logout")}
          component={Link}
          to={text.paths.logout}
        >
          {Logout}
        </Button>
        <Switch />
        <small>Turn off darkmode</small>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
