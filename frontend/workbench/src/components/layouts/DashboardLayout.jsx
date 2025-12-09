import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />

      <div className="h-16"></div>

      {user && (
        <div>{children}</div>
      )}
    </>
  );
};

export default DashboardLayout;
