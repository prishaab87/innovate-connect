import React from "react";
import { Link } from "react-router-dom";
import styles from "./StarredProject.module.css";

export default function StarredProject({ data }) {
  // Check if there are no starred projects
  if (!data.starredProjects || data.starredProjects.length === 0) {
    return (
      <div>
        No projects for now. Let's get started.
        <Link to="/help">If you face any problem, read this.</Link>
      </div>
    );
  }

  // Render the list of starred projects
  return (
    <div className="box">
      {data.starredProjects.map((project) => (
        <div key={project.id}>
          {/* Use project.upvotes instead of "project.upvotes" */}
          <li>upvotes:{project.upvotes}</li>
          <div className={styles.keywords}>
            {" "}
            <em>KeyWords</em>
            {project.keywords.map((t, index) => (
              // Use a unique key for each list item
              <li key={index}>{t}</li>
            ))}
          </div>
          <li>Status: {project.status}</li>
          <li> Project Author: {project.owner}</li>
          <li>Project Name: {project.projectName}</li>
        </div>
      ))}
    </div>
  );
}
