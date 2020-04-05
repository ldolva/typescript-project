import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Logout from "./components/Pages/Logout";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Programs from "./components/Pages/Programs";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#33c9dc",
        main: "#424242",
        dark: "#008394",
        contrastText: "#fff"
      },
      secondary: {
        light: "#ff6333",
        main: "#ff3d00",
        dark: "#b22a00",
        contrastText: "#fff"
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/programs" component={Programs}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/logout" component={Logout}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
