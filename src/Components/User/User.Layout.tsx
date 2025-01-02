import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const UserLayout: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="row">
        {/* <h2>Admin Panel</h2> */}
        <div className="column side">
          <button onClick={goToDashboard} className="button-sidebar">
            Dashboard
          </button>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
