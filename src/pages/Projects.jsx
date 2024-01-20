import React from "react";
import ProjectList from "../component/ProjectList";

export default function Projects(projects) {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
