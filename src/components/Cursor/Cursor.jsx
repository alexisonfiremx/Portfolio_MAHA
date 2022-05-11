import React from 'react'
import {useMousePosition} from './useMousePosition';
import { motion } from 'framer-motion';
import './Cursor.scss'

const Cursor = () => {

    const {x, y, hoverNav} = useMousePosition();

  return (
    <>
    <motion.div
    className='cursor__styles'
    animate={{
        top: y,
        left: x,
        x: "-50%",
        y: "-50%",
        scale: hoverNav? 1.3 : 1.5,
        opacity: hoverNav? 1 : 0.20,
        border: hoverNav? "0.1vw solid #0f0e0e" : "none",
        backgroundColor: hoverNav? "#313bac" : "white",
    }}
    transition= {{ease: "linear", duration: 0.15}}
    />
    <div 
    className={hoverNav? "on-focus pointer__styles" : "pointer__styles"}
    style={{
        top: y,
        left: x
    }}
    />
    </>
  )
}

export default Cursor