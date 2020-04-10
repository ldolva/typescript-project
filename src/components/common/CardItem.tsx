import React, { ReactNode } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

interface Props {
  title: string;
  content: string;
  children?: ReactNode;
  variant: any;
}

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
    maxWidth: 300,
    background: "#758184",
  },
  title: {
    fontSize: 14,
  },
}));

const CardItem: React.FC<Props> = ({ title, content, variant }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root} variant={variant}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read more</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
export default CardItem;
