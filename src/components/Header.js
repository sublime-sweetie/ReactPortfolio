import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: '#52B69A',
  },
  headingStyle: {
    fontSize: '100px',
  },
  underlayStyle:{
    fontSize:'35px',
    justifyContent: 'center',
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Faith Wallace</h1>
      <h2 style={styles.underlayStyle}>Database Specialist</h2>
    </header>
  );
}

export default Header;
