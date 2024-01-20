import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ image }) {
  const [searchProject, setSearchProject] = useState("");
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Project Connect</h1>
      </div>
      <div className={styles.item}>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="">LeaderBoard</Link>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchProject(e.target.value)}
          placeholder="Search for projects"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.image}>
        <img src={`${image}`} alt="user" />
      </div>
    </nav>
  );
}
