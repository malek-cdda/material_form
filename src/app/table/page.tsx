import Table from "@/components/Table/Table";
import { headCellsProps, rowDataProps } from "@/components/Table/types";
import React from "react";

const Home = () => {
  const headCells: headCellsProps[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
    },
    {
      id: "join",
      numeric: false,
      disablePadding: false,
      label: "Joining Date",
    },
    {
      id: "agent",
      numeric: false,
      disablePadding: false,
      label: "Agent",
    },
    {
      id: "buyer",
      numeric: false,
      disablePadding: false,
      label: "Buyer",
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
    },
  ];
  const rowData: rowDataProps[] = [
    {
      id: 1,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 2,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 3,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 4,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 5,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
    {
      id: 6,
      img: "/image/buyer.png",
      name: "<NAME>",
      status: "Active",
      join: "2021-01-01",
      agent: "<NAME>",
      buyer: "<NAME>",
    },
  ];
  return <Table headCells={headCells} row={rowData} />;
};

export default Home;
