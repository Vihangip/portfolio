import React from 'react';
import Project from './Project';

function ProjectList() {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    // Add more projects here...
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

export default ProjectList;
