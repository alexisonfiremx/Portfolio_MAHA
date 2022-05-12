import React, {useState} from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import Dropdown from '../Dropdown/Dropdown';
import {IoMdArrowDropdown} from 'react-icons/io';
import { SidebarData } from '../SidebarDropdown/SidebarData';
import SubMenu from '../SidebarDropdown/SubMenu';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 900) {
        setDropdown(false);
        } else {
        setDropdown(true);
        }
    };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 900) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo' />
        </div>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'app__navbar-links nav-menu active' : 'app__navbar-links nav-menu'}>
            {['home', 'about', 'work', 'skills', 'whereabouts', 'contact'].map(item => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
                <li
                    className='nav-item app__flex p-text'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div />
                    <p
                    
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                    RESUME <IoMdArrowDropdown/>
                    </p>
                    {dropdown && <Dropdown />}
                    
                </li>
        </ul>

        <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                { toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                        {['home', 'about', 'work', 'skills', 'whereabouts', 'contact'].map(item => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)} >
                                    {item}
                                </a>
                            </li>
                        ))}
                            {SidebarData.map((item, index) => {
                                        return <SubMenu item={item} key={index} />;
                                        })}


                        </ul>
                    </motion.div>

                )}
        </div>
    </nav>

  )
}

export default Navbar