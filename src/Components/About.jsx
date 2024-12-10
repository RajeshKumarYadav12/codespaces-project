/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */

const description =
  "I'm a full-stack developer studying at the Indian Institute of Information Technology, Manipur. I enjoy creating efficient and scalable web applications while focusing on both front-end and back-end development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Bootstrap",
  "C++",
  "PHP",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply interested in developing scalable and high-performance web applications. By working on both front-end and back-end technologies, I strive to design smooth and intuitive user experiences while addressing real-world challenges. As I advance in my career, I am excited to contribute to cutting-edge projects and continue my growth in the field.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>

        {/* Resume Section */}
        <hr />
        <h3>Download My Resume</h3>
        <p>If you'd like to see my work experience and projects in more detail, feel free to download my resume below.</p>
        <a
          href="https://drive.google.com/file/d/13i1VEI0D0qCFrbYWXUiUsez-SLXeCEyx/view?usp=sharing"  // Replace with your resume's actual path
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.25rem",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
