import React from "react";
import styles from "./Dashboard.module.css";
import StarredProject from "../component/StarredProject";
import CurrentProject from "../component/CurrentProject";
import HomeContent from "../component/HomeContent";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
export default function Dashboard({ image, data }) {
  if (!data) return <div>This is not you, but us</div>;
  console.log(data);
  return (
    <div className={styles.main}>
      <div className="top">
        <Navbar image={image} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.Detail}>
          <HomeContent image={image} data={data} />
          <div className="container">
            <CurrentProject data={data} />
            "starredProjects "
            <StarredProject data={data} />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
