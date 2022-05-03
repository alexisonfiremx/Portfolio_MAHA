import React, {useEffect} from 'react';
import './Transition.scss';
import gsap, {Power4} from 'gsap';

function Transition() {
    const timeline = gsap.timeline();

    useEffect(() => {
        const texty = document.querySelector(".texty-move")
        const loading = document.querySelector(".transition-effect")
        timeline.from(texty,{
            opacity: 0,
            duration: 1.5,
            ease: "easeInOut",
            y: "350%"
        })
        .to(texty,{
            opacity: 0,
            duration: 1.5,
            ease: "easeInOut",
            y: "-350%",
            delay: 0,
        })
        .to(loading, {
            duration: 3.5,
            y: "-100%",
            ease: Power4.easeOut
        });
    })

    const generateMessage = ()=>{
        const messages = ["Hold On...",
        "Just A Sec...",
        "Any Minute Now...",
        "Loading...",
        "It's Coming...",
        "One Moment...",
        "Almost There...",
        "Hang On...",
        "Easy Does It..."]
        const randomNum = Math.floor(Math.random()*messages.length)
        return messages[randomNum]
    }

    return (
        <div>
            <div className="transition-effect">
                <h1 className='texty-move head-text-loading'>
                    { generateMessage() }
                </h1>
            </div> 
        </div>
    )
}

export default Transition
