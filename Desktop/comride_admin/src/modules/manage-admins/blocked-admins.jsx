import React from "react";
import "./manage-admins.css";
import AdminTable from "../../components/manage-admins/adminTable";

const BlockedAdmins = () => {
  return (
    <>
        <AdminTable type="blockedAdminList" />
    </>
  );
};

export default BlockedAdmins;
