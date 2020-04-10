import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const textStyle = {
  primaryTextColor: "rgba(255,255,255)",
  secondaryTextColor: "#f6c90e",
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303841",
      light: "#595f67",
      dark: "#21272d",
    },
    secondary: {
      main: "#f6c90e",
      light: "#f7d33e",
      dark: "#ac8c09",
    },
    text: {
      primary: textStyle.primaryTextColor,
      secondary: textStyle.secondaryTextColor,
    },
  },
});
