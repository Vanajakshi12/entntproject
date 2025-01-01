import React from "react";
import "./Admin.Layout.css";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const goToCommunication = () => {
    navigate("/admin/communication");
  };
  const goToDashboard = () => {
    navigate("/admin");
  };
  return (
    <>
      <div className="row">
        {/* <h2>Admin Panel</h2> */}
        <div className="column side">
          <button onClick={goToDashboard} className="button-sidebar">
            Dashboard
          </button>
          <button onClick={goToCommunication} className="button-sidebar">
            Communication Methods
          </button>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
