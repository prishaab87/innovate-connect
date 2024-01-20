import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
const BASE_URL = "http://localhost:1000";

export default function ProjectList() {
  const [projects, SetProjects] = useState();
  useEffect(
    function () {
      async function fetchProjects() {
        try {
          const res = await fetch(`${BASE_URL}/project`);
          const data = await res.json();
          console.log(data);
          SetProjects(data);
        } catch {
          console.log("error faced");
        }
      }
      fetchProjects();
    },
    [SetProjects]
  );
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
