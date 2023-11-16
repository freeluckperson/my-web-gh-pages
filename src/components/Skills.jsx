import React from "react";
import "./Skills.css";
// import { faNode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <FontAwesomeIcon icon={faJs} size="4x" />
      <FontAwesomeIcon icon={faReact} size="4x" />
      <FontAwesomeIcon icon={faNodeJs} size="4x" />
      <FontAwesomeIcon icon={faDatabase} size="4x" />
      <FontAwesomeIcon icon={faBootstrap} size="4x" />
      <FontAwesomeIcon icon={faCss3Alt} size="4x" />
      <FontAwesomeIcon icon={faHtml5} size="4x" />
      <FontAwesomeIcon icon={faGitAlt} size="4x" />
      <FontAwesomeIcon icon={faGithub} size="4x" />
    </div>
  );
};

export default Skills;
