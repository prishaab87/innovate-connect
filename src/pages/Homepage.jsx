import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import HomeContent from "../component/HomeContent";
import StarredProject from "../component/StarredProject";
import CurrentProject from "../component/CurrentProject";
// import CurrentProject from "../component/CurrentProject";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HomeContent />
      <div className="projects">
        <div className="container">
          <CurrentProject />
          <StarredProject />
        </div>
      </div>
    </div>
  );
}
