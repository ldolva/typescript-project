import React from "react";
import { NavBarEnum } from "../../utils/enums";

const About: React.FC = () => {
  return (
    <div>
      <h1>{NavBarEnum.About}</h1>
      <section>This is an app for testing</section>
    </div>
  );
};
export default About;
