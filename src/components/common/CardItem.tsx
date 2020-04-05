import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface Props {
  title: string;
  content: string;
}

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
}));

const CardItem: React.FC<Props> = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
};
export default CardItem;
