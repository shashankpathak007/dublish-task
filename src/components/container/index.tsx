import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Header from "../header";
import Footer from "../footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    middleContainer: {
      paddingBottom: theme.spacing(2),
      height: "80.8vh",
      overflowY: "auto",
    },
  })
);

function Container({ children }: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.middleContainer}>{children}</div>
      <Footer />
    </div>
  );
}

export default Container;
