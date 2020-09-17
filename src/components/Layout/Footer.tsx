import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FooterColumn from "./FooterColumn";
import { text } from "../../utils/constants";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: "relative",
    bottom: 0,
    height: 180,
    background: "#303841",
    color: theme.palette.text.primary,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    clear: "both",
  },
  grid: {
    gridTemplateColumns: "1fr 1fr 1fr",
    display: "grid",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.grid}>
          <FooterColumn header={"Buy"} links={["iPad", "Watch", "Mac"]} />
          <FooterColumn
            header="Services"
            links={["Apple music", "Apple TV", "iCloud"]}
          />
          <FooterColumn
            header="Contact"
            links={[
              "100 US-277, Eldorado,",
              "TX 76936, United States",
              "+47 99 45 34 93",
              "support@mysite.com",
            ]}
          />
        </div>
        &copy;{new Date().getFullYear()} Made by L . D - All rights reserved
      </Container>
    </footer>
  );
};
export default Footer;


