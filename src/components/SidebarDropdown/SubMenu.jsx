import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './SubMenu.scss'

const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);



  return (
    <li >
        <p className='sidebarLink' onClick={item.subNav && showSubnav}>
        <p>
            <span >{item.title}</span>
        </p>
        <p className='iconStyle'>
            {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </p>
        </p>
        {subnav &&
        item.subNav.map((item, index) => {
            return (
            <a className='dropdownLink' key={index} href={item.path} download>
            {item.title}
            </a>

            );
        })}
    </li>
  )
}

export default SubMenu