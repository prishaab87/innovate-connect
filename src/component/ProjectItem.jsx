import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectItem.module.css";

// const BASE_URL = "http://localhost:8000";

export default function ProjectItem({ project }) {
  //   const [currentProject, setCurrentProject] = useState();
  //   const id = project.id;
  //   async function getProject() {
  //     try {
  //       const res = await fetch(`${BASE_URL}/cities/${id}`);
  //       const data = await res.json();
  //       setCurrentProject(data);
  //     } catch {
  //       console.log("There is some issues");
  //     }
  //   }
  return (
    <li className={styles.item}>
      <Link
        className={`${styles.projectItem} `}
        //   ${
        //   id === currentCity.id ? styles["cityItem--active"] : ""
        // } `}
        // to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        {/* <span className>{project.rating}</span> */}
        <div className="image">
          <img src={project.image} alt={project.name} />
          <p> {project.owner}</p>
        </div>
        <div className="data">
          <h3 className={styles.tech}>{project.techStack}</h3>
          {/* <img src=`${project.image}` alt="" /> */}
          <p className={styles.name}>Project Name: {project.name} Projects</p>
          <p className={styles.status}>Status: {project.status} Projects</p>
          <p className="completed">completed</p>
        </div>
      </Link>
    </li>
  );
}
