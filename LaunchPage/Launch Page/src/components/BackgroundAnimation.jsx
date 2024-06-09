

import React, { useEffect, useState } from 'react';
import styles from './BackgroundAnimation.module.css'; // Import CSS module for styling

import Frame1 from '../assets/bg_animation/state1.svg';
import Frame2 from '../assets/bg_animation/state2.svg';
import Frame3 from '../assets/bg_animation/state3.svg';
import Frame4 from '../assets/bg_animation/state4.svg';

const BackgroundAnimation = () => {
  const frames = [Frame1, Frame2, Frame3, Frame4];
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 1500); // Change the interval as needed for your animation speed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [frames.length]);

  const currentFrame = frames[currentFrameIndex];

  return (
    <div className={styles.animationContainer}>
      <img
        src={currentFrame}
        alt="Background Animation"
        className={styles.animationImage}
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default BackgroundAnimation;
