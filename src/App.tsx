import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Logout from "./components/Pages/Logout";
import { ThemeProvider } from "@material-ui/core/styles";
import Programs from "./components/Pages/Programs";
import { text } from "./utils/constants";
import { theme } from "./style/theme";
import { db } from "./firebase/firebaseSetup";
import Footer from "./components/Layout/Footer";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  const { paths } = text;

  db.collection("persons")
    .get()
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        console.log(typeof doc.data);
        data.push(doc.data());
      });
    });
  console.log("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path={paths.home} component={Home}></Route>
              <Route exact path={paths.programs} component={Programs}></Route>
              <Route exact path={paths.about} component={About}></Route>
              <Route exact path={paths.logout} component={Logout}></Route>
            </Switch>
          </Router>
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
