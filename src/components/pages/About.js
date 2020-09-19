import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div style={{display: 'flex', alignItems: 'center'}}><h5>Version </h5><strong style={{margin: "0 5px"}}>2.1.0</strong></div>
      <p style={{margin: "1rem 0"}}>Git-Lookup is an application developed using ReactJS, Node and the GitHub API to give users a quick and easy way to view specific developers development profiles. Information regarding software projects, followings, personal/professional websites, and work availability.</p>
    </div>
  );
};

export default About;
