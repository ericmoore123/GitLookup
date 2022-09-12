import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Version </h3>
        <strong style={{ margin: "0 5px" }}>2.1.0</strong>
      </div>
      <p style={{ margin: "0 0 0 0.5rem" }}>
        Git-Lookup is an application developed using ReactJS, Node and the
        GitHub API to give users a quick and easy way to view specific
        developers development profiles. Information regarding software
        projects, followings, personal/professional websites, and work
        availability.
      </p>

      <div>
        <h3 style={{padding: "15px 0 0 0"}}>Author GitHub: <a
          alt="Link to Eric Moore's github profile"
          without
          rel="noopener noreferrer"
          target="_blank"
          href="http://github.com/ericmoore123"
        >   Eric Moore
        </a></h3> 
      </div>

      <h3 style={{ margin: "1rem 0 0 0" }}>Technologies Used</h3>
      <ul style={{ margin: "0 0.5rem" }}>
        <li>
          <a
            href="https://reactjs.org/"
            alt="reactjs website link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS
          </a>
        </li>
        <li>
          <a
            href="https://reactrouter.com/"
            alt="react router website link"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router
          </a>
        </li>
        <li>
          <a
            href="https://nodejs.org/en/"
            alt="NodeJS website link"
            target="_blank"
            rel="noopener noreferrer"
          >
            NodeJS
          </a>
        </li>
        <li>
          <a
            href="https://nodejs.org/en/"
            alt="GitHub API link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
