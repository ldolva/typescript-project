import React from "react";
import { NavBarEnum } from "../../utils/enums";
import CardItem from "../common/CardItem";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.text.secondary,
    marginTop: 16,
    marginBottom: 20,
  },
  firstRowWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  secondRowWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  card: {
    "&:hover": {
      border: "solid red 2px",
    },
  },
}));

const Programs: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        {NavBarEnum.Programs}
      </Typography>
      {/* <h1>test</h1> */}
      <div>
        <div className={classes.firstRowWrapper}>
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
        </div>
        <div className={classes.secondRowWrapper}>
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
          <CardItem
            className={classes.card}
            title="3000 meter"
            content="This is a course for medium range of distance, well suited for intermediate level runners"
            variant="outlined"
          />
        </div>
      </div>
    </Container>
  );
};

export default Programs;
