import React, {useEffect, useState} from 'react'
import './Header.scss';
import { AppWrap } from '../../wrapper';
import gsap from 'gsap';
import video from '../../assets/final_01.mp4'

const Header = () => {

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);
  
  
  useEffect(() => {
    const timeline = gsap.timeline();
    const name = document.querySelector(".animate-name")
    const subtitle = document.querySelectorAll(".animate-subtitle")
    timeline.from(name,{
        opacity: 0,
        duration: 6.5,
        ease: "power4.inOut(1, 0.5)",
        y: "200%",
        stagger: 4,
    } ,"-=.5")
    .from(subtitle,{
      opacity: 0,
      duration: 1.1,
      ease: "power2.inOut",
      y: "200%",
      stagger: 0.7,
  },"-=2.5")
  // setLetterClass('text-animate-hover')
},[])



  return (
    <div className='app__header app__flex-landing'>
            <video className="video" src={video} autoPlay loop muted />
      <div className='app__flex-landing'>
              <h1 className='head-text-landing stroke glitch animate-name' data-glitch="Marcos Herrera">Marcos Herrera</h1>
      </div>
      <div className='app__flex-landing'>
        <p 
          className={hovered ? 'p-text-landing animate-subtitle bouncing' : 'p-text-landing animate-subtitle'}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <span className='glow-landing bouncing'>Slicker than your average </span></p>
        <p
          className={hovered2 ? 'p-text-landing animate-subtitle bouncing' : 'p-text-landing animate-subtitle'}
          onMouseEnter={toggleHover2}
          onMouseLeave={toggleHover2}
        >
          <span  style={{color: '#313bac'}}> web developer</span></p>
      </div>

    </div>
  )
}

export default AppWrap(Header, 'home')

