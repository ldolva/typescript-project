import React from "react";
import { NavBarEnum } from "../../utils/enums";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.text.secondary,
    marginTop: 20,
    marginBottom: 20,
  },
}));

const Logout: React.SFC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        {NavBarEnum.Logout}
      </Typography>
    </Container>
  );
};

export default Logout;
