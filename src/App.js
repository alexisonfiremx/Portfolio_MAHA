import React from 'react';
import {About, Footer, Header, Skills, Testimonial, Work} from './containers'
import { Navbar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import Transition from './containers/Transition/Transition';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Transition />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
    </Router>
  )
}

export default App;