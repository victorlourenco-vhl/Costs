import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home/index'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject/index'
import Contact from './components/pages/Contact'

import Container from './components/layout/Container/index'
import Navbar from './components/layout/Navbar/index'
import Footer from './components/layout/Footer/index'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;
