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
import { useParams, useHistory } from "react-router-dom";

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
  })
);

function Category() {
  const [category, setCategory] = useState<any>([]);
  const { dealerId, branchId } = useParams<any>();
  const history = useHistory();
  const classes = useStyles();

  const { data } = selectLocationData;
  const { locations } = data;

  useEffect(() => {
    const dealer = findDealer(dealerId, locations);
    const { branches } = dealer;
    const branch = branches.find((item: any) => item.branch_id === branchId);
    const { categories } = branch;
    setCategory(categories);
  }, [dealerId, branchId, locations]);

  function findDealer(dealerId: any, locations: any) {
    for (let item of locations) {
      if (item.dealers_id === dealerId) {
        return item;
      }
    }
  }

  const handleSubCategory = (subCategory: any) => {
    history.push(`/categoryDetail/${dealerId}/${branchId}/${subCategory}`);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Breadcrumbs aria-label="breadcrumb" style={{ padding: "16px 0" }}>
          <Typography>Equipment Catalog</Typography>
        </Breadcrumbs>
        <Grid container spacing={2}>
          {category.map((item: any) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3} style={{ padding: "16px" }}>
                    <Box width="100%" height="100%">
                      <img
                        alt={item.name}
                        src={`../.././images/${item.image}`}
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
                      onClick={() => handleSubCategory(item.name)}
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

export default Category;
