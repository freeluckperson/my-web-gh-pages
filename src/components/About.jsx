import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <p className="lead">
        Hi there! I'm an agricultural engineer who has recently discovered my
        passion for web programming. Although my background and work experience
        are in agriculture, I have been training and practicing web development
        on both the front-end and back-end. I am excited to continue learning
        and developing my skills in web programming, and I hope to apply my
        knowledge to projects that have an attractive design and easy-to-use.
      </p>
      <a href="http://linkedin.com/in/erick-daniel-segura-cabello-9b172a129">
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a href="https://github.com/freeluckperson">
        <FontAwesomeIcon
          icon={faGithub}
          size="4x"
          style={{ marginLeft: "20px" }}
        />
      </a>
      <a href="https://www.mediafire.com/file/3ktmkrrsgkejef6/cv-resume.pdf/file">
        <FontAwesomeIcon
          icon={faFilePdf}
          size="4x"
          style={{ marginLeft: "20px" }}
        />
      </a>
    </>
  );
};

export default About;
