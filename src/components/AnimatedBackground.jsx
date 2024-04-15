// AnimatedBackground.js
import React, { useEffect } from 'react';
import './AnimatedBackground.css';

function AnimatedBackground() {
  useEffect(() => {
    createStars();

  }, []);

  function createStars() {
    let noOfStars = window.innerWidth < 700 ? 15 : 50;
    for (let i = 0; i < noOfStars; ++i) {
      const star = document.createElement('span');
      star.classList.add('star');

      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;
      let z = Math.floor(Math.random() * 1) + 2;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${z + size}px`;
      star.style.height = `${z + size}px`;

      star.style.animationDuration = `${5 + duration}s`;
      star.style.animationDelay = `${duration}s`;

      document.querySelector('.animated-area').appendChild(star);
    }
  }

 
  return <section className="animated-area"></section>;
}

export default AnimatedBackground;
