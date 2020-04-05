import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { NavBarEnum } from "../utils/enums";
import { text } from "../utils/constants";

const NavBar = () => {
  const { Home, Programs, About, Logout } = NavBarEnum;
  const { paths } = text;

  const style = {
    navbar: {
      margin: "auto",
    },
  };
  return (
    <>
      <AppBar>
        <Toolbar style={style.navbar}>
          <Button color="inherit" component={Link} to={paths.home}>
            {Home}
          </Button>
          <Button color="inherit" component={Link} to={paths.programs}>
            {Programs}
          </Button>
          <Button color="inherit" component={Link} to={paths.about}>
            {About}
          </Button>
          <Button color="inherit" component={Link} to={paths.logout}>
            {Logout}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
