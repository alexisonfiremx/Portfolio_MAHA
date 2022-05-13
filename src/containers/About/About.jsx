import React, { useEffect, useRef, useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import lottie from 'lottie-web';
import { Laptop } from '../../components';

const About = () => {

  const container = useRef(null)
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);

  useEffect(() => {

    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/working_svg.json')
    })

  }, []);

return (
  <>
    <h2 className="head-text ">
      <strong className='stroke glitch' data-glitch="Fullstack">Fullstack</strong>
      <span className='glow'> capable,</span>
      <br />
      <strong className='stroke glitch' data-glitch="Frontend">Frontend</strong>
      <span className='glow'> addicted</span>
    </h2>

    <div className="app__about-item app__flex">
      <div className="app__about-content">
          <p 
              className={hovered2 ? 'p-text bouncing' : 'p-text'}
              onMouseEnter={toggleHover2}
              onMouseLeave={toggleHover2}
          >
        I’m an ambitious web developer with fullstack capabilities, with a preference
        for frontend development, looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
          </p>
        <p 
              className={hovered ? 'p-text bouncing' : 'p-text'}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
        >
        I'm quietly confident, naturally curious, and perpetually working on
        improving my chops one task at a time.
        </p>
      </div>
      {/* <div className="container" ref={container} ></div> */}
      <Laptop />
      
    </div>



  </>
);
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);