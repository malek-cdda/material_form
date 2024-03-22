import {
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { rowDataProps } from "./types";
const CustomCheckbox = withStyles({
  root: {
    color: "#ced4da", // Red by default
    "&$checked": {
      color: "#405189", // Blue when checked
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const EnhanceTableBody = ({
  row,
  handleSelectClick,
  selected,
}: {
  row: rowDataProps[];
  handleSelectClick: () => void;
  selected: any;
}) => {
  const isSelected = (id: number) => selected?.indexOf(id) !== -1;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <TableBody>
      {row.map((row: rowDataProps, index: number) => {
        const isItemSelected = isSelected(row.id);
        return (
          <TableRow
            key={index}
            hover
            onClick={() => {
              handleSelectClick(row.id);
            }}>
            <TableCell padding="checkbox">
              <CustomCheckbox
                checked={isItemSelected}
                onChange={handleChange}
                inputProps={{
                  "aria-labelledby": "1",
                }}
              />
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
            <TableCell
              style={{
                padding: "12px 9.5px",
              }}>
              {row.name}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default EnhanceTableBody;
