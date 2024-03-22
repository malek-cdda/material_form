import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { headCellsProps } from "./types";
const CustomCheckbox = withStyles({
  root: {
    color: "#ced4da", // Red by default
    "&$checked": {
      color: "#405189", // Blue when checked
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const EnhanceTableHead = ({
  headCells,
  onSelectAllClick,
  rowCount,
  numSelected,
}: {
  headCells: headCellsProps[];
  onSelectAllClick: any;
  rowCount: number;
  numSelected: any;
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <CustomCheckbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell: headCellsProps, index: number) => {
          return (
            <TableCell
              key={headCell.id}
              style={{
                padding: "12px 9.5px",
              }}>
              {headCell.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default EnhanceTableHead;
