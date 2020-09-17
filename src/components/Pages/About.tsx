import React from "react";
import { NavBarEnum } from "../../utils/enums";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  header: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  content: {
    color: "white",
  },
}));

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.header} variant="h4">
        {NavBarEnum.About}
      </Typography>
      <p className={classes.content}>
        {`This is an app for testing out Typescript, Material Ui, React Hooks and
        other features.
        
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Provident, veniam, similique esse quod fuga perspiciatis
        laudantium, repellendus libero ratione veritatis non eius. Architecto a
        eius omnis minima odio aliquid cupiditate? Quo voluptatem iste rem
        sapiente veritatis alias, libero magnam assumenda. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Magni illo incidunt impedit facere
        esse beatae? Beatae, sequi laboriosam, eaque veniam porro, blanditiis
        iusto corrupti laudantium commodi consequatur inventore mollitia
        recusandae ea aliquid debitis exercitationem provident. Sed assumenda
        dolorum similique necessitatibus! Omnis, ut? Quod, ducimus nisi?`}
      </p>
    </Container>
  );
};
export default About;
