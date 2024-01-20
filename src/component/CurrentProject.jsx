import React from "react";
import { Link } from "react-router-dom";
import styles from "./currentProject.module.css";

export default function CurrentProject({ data }) {
  if (!data.current_project)
    return (
      <div>
        start your journey today, create a new project
        <Link>Learn how to get started</Link>
      </div>
    );
  const curr = data.current_project;
  const tag = curr.keywords;

  return (
    <div className="box">
      {data.curr.map((project) => (
        <div key={project.id}>
          {/* Use project.upvotes instead of "project.upvotes" */}
          <li>upvotes:{project.upvotes}</li>
          <div className={styles.keywords}>
            {" "}
            <em>KeyWords</em>
            {tag.map((t, index) => (
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
