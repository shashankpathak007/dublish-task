import { useEffect, useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Box,
  Button,
  Paper,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import { useParams, Link } from "react-router-dom";

// ******************************** json data
import selectLocationData from "../../utils/data.json";

// ******* icons
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      maxWidth: "1156px",
      margin: "0 auto",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  })
);

function CategoryDetail() {
  const [subCategory, setSubCategory] = useState<any>([]);
  const classes = useStyles();
  const { dealerId, branchId, categoryId } = useParams<any>();

  const { data } = selectLocationData;
  const { locations } = data;

  useEffect(() => {
    const dealer = findDealer(dealerId, locations);
    const { branches } = dealer;
    const branch = branches.find((item: any) => item.branch_id === branchId);
    const { categories } = branch;
    const category = categories.find((item: any) => item.name === categoryId);
    const { subcategories } = category;
    setSubCategory(subcategories);
  }, [dealerId, branchId, categoryId, locations]);

  function findDealer(dealerId: any, locations: any) {
    for (let item of locations) {
      if (item.dealers_id === dealerId) {
        return item;
      }
    }
  }

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Breadcrumbs aria-label="breadcrumb" style={{ padding: "16px 0" }}>
          <Link
            to={`/category/${dealerId}/${branchId}`}
            className={classes.link}
          >
            <Typography>Equipment Catalog</Typography>
          </Link>
          <Typography color="textPrimary">{categoryId}</Typography>
        </Breadcrumbs>
        <Grid container spacing={2}>
          {subCategory.map((item: any) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Box width="100%" height="100%">
                      <img
                        alt={item.name}
                        src={`../../.././images/${item.image}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      endIcon={<ArrowRightIcon />}
                    >
                      {item.name}
                    </Button>
                  </Paper>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default CategoryDetail;
