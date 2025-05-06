import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Section */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {[
              "HTML / CSS",
              "JavaScript",
              "Tailwind CSS / Bootstrap",
              "React.js / Vite.js / Next.js",
              "Redux / Redux Toolkit / Context API",
              "Responsive Design / BEM Methodology",
              "TypeScript",
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {[
              "Node.js / Express.js / API Handling",
              "Spring Boot / Hibernate",
              "MongoDB / MySQL",
              "JWT Authentication",
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Programming & Tools Section */}
        <div className="experience__backend">
          <h3>Programming & Tools</h3>
          <div className="experience__content">
            {[
              "Java / Python / C++",
              "Git / GitHub",
              "VS Code / IntelliJ / Eclipse",
              "MySQL Workbench / MongoDB Compass",
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* DevOps & Cloud Section */}
        <div className="experience__backend">
          <h3>Cloud & DevOps</h3>
          <div className="experience__content">
            {[
              "AWS (EC2, S3, Lambda, CloudFormation)",
              "Docker / Kubernetes",
              "Linux / Windows OS",
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
