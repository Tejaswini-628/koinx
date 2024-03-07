import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
          <Link to="/bitcoin" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Bitcoin
          </Link>

    </div>
  );
};
export default Home;
