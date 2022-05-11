import React from 'react';
import {About, Footer, Header, Skills, Whereabouts, Work} from './containers'
import { Navbar, Cursor } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import Transition from './containers/Transition/Transition';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Transition />
      <Cursor />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Whereabouts />
      <Footer />
    </div>
    </Router>
  )
}

export default App;