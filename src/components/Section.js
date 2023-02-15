import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: '#99D98C',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Faith Wallace</h2>
      <p>
        Hello, I am a full stack developer with an eye for problem-solving and
        a knack for structuring databases and manipulating data.
      </p>
      <p>
      After I graduated from USC with my BA at age 19 I began working as a Behavior 
      Therapist for children with disabilities and eventually found myself running 
      three nursing homes for medically fragile children. These jobs helped me understand
      the ways we can use technology to make the world more accessible for our fellow
      people. 
      </p>
      <p>
      My first foray into the tech field was by becoming a Engineering and Computer
      Coding Teacher. I went to local schools and taught students computer literacy 
      skills, JavaScript, and robotics building. I was also able to teach Minecraft 
      CodingCamp, where campers would join online sessions and learn JavaScript
      and math skills via videogames.
      Now I am working as a Data Coordinator for a school picture company in Los Angeles
      I'm in charge of collaborating with over 300 schools to take pictures of approximately
      130,000 students each season. I format data, set up the database, and help make
      sure the database is properly connected to the website so that parents can order their
      child's pictures. 

      </p>
    </section>
  );
}

export default Section;
