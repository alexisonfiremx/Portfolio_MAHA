import React, {useEffect} from 'react'
import './Header.scss';
import { AppWrap } from '../../wrapper';
import gsap from 'gsap';
import video from '../../assets/final_01.mp4'

const Header = () => {

  const timeline = gsap.timeline();

  useEffect(() => {
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
})


  return (
    <div className='app__header app__flex-landing'>
            <video className="video" src={video} autoPlay loop muted />
      <div className='app__flex-landing'>
              <h1 className='head-text-landing stroke glitch animate-name' data-glitch="Marcos Herrera">Marcos Herrera</h1>
      </div>
            <div className='app__flex-landing'>
              <p className='p-text-landing animate-subtitle'><span className='glow-landing'>Slicker than your average </span></p>
              <p className='p-text-landing animate-subtitle'><span  style={{color: '#313bac'}}> web developer</span></p>
            </div>
    </div>
  )
}

export default AppWrap(Header, 'home')

