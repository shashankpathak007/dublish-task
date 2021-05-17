import { createMuiTheme } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import purple from "@material-ui/core/colors/purple";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo[300],
    },
    secondary: {
      main: purple[500],
      light: purple[300],
    },
  },
});
