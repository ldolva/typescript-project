import React from "react";
import CardItem from "./common/CardItem";

const Menu: React.FC = () => {
  return (
    <div>
      <CardItem
        title="Running"
        variant="outlined"
        content="This is activities,intervals, and other stuff"
      ></CardItem>
    </div>
  );
};
export default Menu;
