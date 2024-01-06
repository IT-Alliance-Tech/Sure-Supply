import React from "react";
import "../manage-admins/manage-admins.css";
import "./manage-admins.css";
import AdminTable from "../../components/manage-admins/adminTable";

const ManageAdmins = () => {

  return (
    <>
        <AdminTable type={"manageAdminList"}/>
    </>
  );
};

export default ManageAdmins;
