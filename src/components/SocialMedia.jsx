import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
      <FaLinkedinIn />
    </div>
    <div>
      <FiGithub />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
  )
}

export default SocialMedia