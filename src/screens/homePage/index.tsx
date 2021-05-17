import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "1156px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(30)
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3
      )}px/${theme.spacing(3)}px "Montserrat, sans-serif"`,
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
    },
  })
);

function HomePage(props: any) {
  const classes = useStyles();
//   console.log(props);

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.heading}>
          Welcome to
        </Typography>
        <Typography variant="h2" className={classes.heading}>
          Rental Management System
        </Typography>
      </Box>
    </div>
  );
}

export default HomePage;
