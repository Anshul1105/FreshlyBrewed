import React from 'react';
import styles from "./Heading.module.css";
// import RocketIcon from './RocketIcon';
// Define the Heading component
const Heading = () => {
  return (
    <div>
      {/* Display a heading */}
      <h1 className={styles.h1}>Launching New Module Soon!</h1>

      {/* Display a paragraph */}
      <p>Exciting things are in the works! We're currently <b>Crafting a new feature</b> for you.
      <br></br>Keep an eye out for updates — We're working to make it available soon!</p>
    </div>
  );
};

// Export the Heading component
export default Heading;