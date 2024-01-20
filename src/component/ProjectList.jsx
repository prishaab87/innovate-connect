import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList(projects) {
  if (!projects) {
    return <div>Loding data</div>;
  }
  return (
    <ul>
      {projects.map(
        (project) => (
          console.log(project),
          (<ProjectItem project={project} key={project.id} id={project.id} />)
        )
      )}
    </ul>
  );
}
