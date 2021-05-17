import {
  makeStyles,
  createStyles,
  Theme,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";
import MultiSelect from "../multiSelect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        3
      )}px/${theme.spacing(3)}px "Montserrat, sans-serif"`,
      color: grey[50],
    },
    multiSelect: {
      marginLeft: theme.spacing(50),
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box component="div">
            <Link to="/">
              <Typography variant="h1" className={classes.heading}>
                Rental Management System
              </Typography>
            </Link>
          </Box>
          <Box className={classes.multiSelect}>
            <MultiSelect />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
