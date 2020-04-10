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
import { theme as themeObject } from "../style/theme";

const useStyles = makeStyles((theme) => ({}));

const NavBar = () => {
  const { Home, Programs, About, Logout } = NavBarEnum;
  const { paths } = text;

  const [theme, setTheme] = useState(themeObject);

  // const useDarkMode = ()=> {

  //   const {palette:{type}} = theme
  //   const toggleDarkMode = ()=> {
  //     const updatedTheme = {...theme, palette:{...theme.palette, type: type ==="light"?"dark":"light"}}
  //     setTheme(updatedTheme)
  //   }

  //   return [theme,toggleDarkMode]
  // }
  const style = {
    navbar: {
      margin: "auto",
    },
  };
  const location = useLocation();

  interface ILocation {
    pathname: string;
  }
  const currentNavBarStyle = (path: string) => {
    if (location.pathname === path)
      return {
        color: "#f6c90e",
      };
  };

  return (
    <>
      <AppBar>
        <Toolbar style={style.navbar}>
          <Button
            color="inherit"
            style={currentNavBarStyle("/")}
            component={Link}
            to={paths.home}
          >
            {Home}
          </Button>
          <Button
            color="inherit"
            component={Link}
            style={currentNavBarStyle("/programs")}
            to={paths.programs}
          >
            {Programs}
          </Button>
          <Button
            color="inherit"
            style={currentNavBarStyle("/about")}
            component={Link}
            to={paths.about}
          >
            {About}
          </Button>
          <Button
            color="inherit"
            style={currentNavBarStyle("/logout")}
            component={Link}
            to={paths.logout}
          >
            {Logout}
          </Button>

          <Switch></Switch>
          <small>Turn off darkmode</small>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
