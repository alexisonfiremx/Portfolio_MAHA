import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/marcosheag/' target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href='https://github.com/alexisonfiremx' target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/alexisonfiremx' target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
  </div>
  )
}

export default SocialMedia