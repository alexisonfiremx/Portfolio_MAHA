import React, { useState, useRef, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';
import lottie from 'lottie-web';
import emailjs from 'emailjs-com'

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   var templateParams = {
  //     name: 'James',
  //     email: 'james@mail.com',
  //     message: 'check this out!'
  // };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const container = useRef(null)

  useEffect(() => {

    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../assets/submitted.json')
    })

  }, [isFormSubmitted]);


  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_vq5rljf','template_rg15xne',event.target,'8Hoo_m39LjZTWHN0R')
    .then((response) => {
      console.log(response)
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  }



  return (
    <>
      <h2 className="head-text">
        <strong className='stroke glitch' data-glitch="Hooked?">Hooked?</strong>
        <span className='glow'> Let's talk</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@marcosheag.com" className="p-text">hello@marcosheag.com</a>
        </div>
        <a href='https://wa.me/526651187273' target="_blank" rel="noopener noreferrer">
          <div className="app__footer-card">
            <img  src={images.mobile} alt="phone" />
            <div className="p-text">WhatsApp me</div>
          </div>
        </a>

      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form style={{width: "100%"}} onSubmit={ e => sendEmail(e)}>
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="submit" className="p-text" >{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) : (
        <div className='form'>
          <div className="container" ref={container} style={{height: "15rem", width: "15rem"}} ></div>
          <h5 className="head-text">
            Thank you for getting in touch 😄
          </h5>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);