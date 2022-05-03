import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.scss';
// import { Link } from 'react-router-dom';
// import { saveAs } from "file-saver";


function Dropdown() {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const handleResume = () => {
    setClick(false);
    // saveFile(props);
}
// const saveFile = (props) => {
//     saveAs(
//         props,
//     "example.pdf"
//     );
// };

return (
    <>
    <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
        {MenuItems.map((item, index) => {
        return (
            <React.Fragment key={index}>
            
            <li                  
            className={item.cName}
            onClick={() => handleResume()}>
                
                <a href={item.path} download>
                {item.title}
                </a>

            </li>
            </React.Fragment>
        );
        })}
    </ul>
    </>
);
}

export default Dropdown;