import React from "react";
import "../manageDrivers.css";
import DriversTable from "../../../components/manage-drivers/manageDriversTable/driversTable";

const ManageDrivers = () => {
  return (
    <>
      <DriversTable type={"manageDrivers"} />
    </>
  );
};

export default ManageDrivers;
