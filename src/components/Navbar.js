import React from 'react';
import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: '#1A759F',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/" style={styles.navbarStyle}>About Me</a>
      <a href="/" style={styles.navbarStyle}>Portfolio</a>
      <a href="/" style={styles.navbarStyle}>Contact</a>
      <a href="/" style={styles.navbarStyle}>Resume</a>
    </nav>
  );
}

export default Navbar;
