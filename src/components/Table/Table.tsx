"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import { Table as TableWrapper } from "@mui/material";
import Paper from "@mui/material/Paper";
import EnhanceTableHead from "./EnhanceTableHead";
import EnhanceTableBody from "./EnhanceTableBody";
import { headCellsProps, rowDataProps } from "./types";
import { handleSelectedClick } from "./utils";
import { TableContainer, TablePagination } from "@material-ui/core";
const Table = ({
  headCells,
  row,
}: {
  headCells: headCellsProps[];
  row: rowDataProps[];
}) => {
  const [dense, setDense] = React.useState(false);
  const [selected, setSelected] = React.useState<any>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  //   page selected function
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // selected item function code here
  const handleSelectedClickItem = async (id: any) => {
    const selectedItem = await handleSelectedClick(id, selected);
    setSelected(selectedItem);
  };
  //  how much data showing on the table body
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //   all item selected function code here
  const handleSelectAllClick = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      const newSelected = row.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const visibleRows = React.useMemo(
    () => row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <TableWrapper
            sx={{ minWidth: 750 }}
            size={dense ? "small" : "medium"}>
            <EnhanceTableHead
              headCells={headCells}
              onSelectAllClick={handleSelectAllClick}
              rowCount={row.length}
              numSelected={selected.length}
            />
            <EnhanceTableBody
              row={visibleRows}
              handleSelectClick={handleSelectedClickItem}
              selected={selected}
            />
          </TableWrapper>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={row.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Table;
