import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [searchProject, setSearchProject] = useState("");
  return (
    <nav className={styles.navbar}>
      <h1>Project Connect</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="">LeaderBoard</Link>

      <input
        type="text"
        onChange={(e) => setSearchProject(e.target.value)}
        placeholder="Search for projects"
        required
      />
    </nav>
  );
}
