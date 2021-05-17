import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: theme.spacing(6),
      backgroundColor: theme.palette.primary.main,
      display: "grid",
      placeItems: "center",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightLight} ${theme.spacing(
        2.2
      )}px/${theme.spacing(2)}px "Montserrat, sans-serif"`,
      color: grey[50],
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        created by harshit
      </Typography>
    </div>
  );
}

export default Footer;
