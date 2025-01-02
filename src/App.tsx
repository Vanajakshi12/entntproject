import * as React from "react";
import "./../src/NavigationBar.css";
import { Button } from "@mui/material";
import ReactDOM from "react-dom/client";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashBoard.tsx";
import NavigationBar from "./NavigationBar.tsx";
import AdminLayout from "./Components/Admin/AdminLayout.tsx";
import MethodList from "./Components/CommunicationMethods/Communication.methods.tsx";
import UserLayout from "../src/Components/User/User.Layout.tsx";
import Dashboard from "./Components/User/dashboard.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/communication" element={<MethodList />} />
          </Route>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="/admin/communication" element={<MethodList/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
