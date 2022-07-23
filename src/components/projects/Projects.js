import React from 'react';
import './projects.scss';
import { projects } from '../../projectData';

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {projects.map((project) => (
          <div className="card">
            <div className="top">
              <h2>{project.name}</h2>
            </div>
            <div className="center">
              <img alt="" src={project.img}></img>
            </div>
            <div className="bottom">
              <div className="left">
                <button>
                  <a target="_blank" rel="noreferrer" href={project.github}>
                    GitHub
                  </a>
                </button>
              </div>
              <div className="right">
                <button>
                  <a target="_blank" rel="noreferrer" href={project.live}>
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
