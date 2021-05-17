import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NestedMenuItem from "material-ui-nested-menu-item";
import selectLocationData from "../../utils/data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

function MultiSelect(props: any) {
  const [menuPosition, setMenuPosition] = useState<any>(null);
  const classes = useStyles();
  const history = useHistory();

  const { data } = selectLocationData;
  const { locations } = data;

  const handleSelectLoction = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  const handleChildItemClick = (dealerId: any, branchId: any) => {
    history.push(`/category/${dealerId}/${branchId}`);
    setMenuPosition(null);
  };

  return (
    <div className={classes.root}>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleSelectLoction}
      >
        Select Location
      </Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        {locations.map((item) => (
          <NestedMenuItem
            key={item.dealers_id}
            label={item.name}
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            {item.branches.map((innerItem) => (
              <MenuItem
                key={innerItem.branch_id}
                onClick={() =>
                  handleChildItemClick(item.dealers_id, innerItem.branch_id)
                }
              >
                {innerItem.name}
              </MenuItem>
            ))}
          </NestedMenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MultiSelect;
