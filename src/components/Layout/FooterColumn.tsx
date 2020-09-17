import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: 0,
  },
  list: {
    listStyleType: "none",

    paddingLeft: 0,
    marginTop: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

interface Props {
  links: string[];
  header: string;
}

const FooterColumn: React.FC<Props> = ({ links, header }) => {
  const classes = useStyles();
  return (
    <div>
      <label>
        <h5 className={classes.header}>{header}</h5>
      </label>
      <ul className={classes.list}>
        {links &&
          links.map((link, index) => (
            <li key={index} style={{ marginTop: 8 }}>
              <a href="http://www.vg.no" className={classes.link}>
                {link}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default FooterColumn;
