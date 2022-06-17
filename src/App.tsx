import React from 'react'
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from 'src/pages/Home'
import Navbar from 'src/components/Navbar'
import RegisterPage from 'src/pages/RegisterPage'
import MyPage from 'src/pages/MyPage'
import webRoutes from 'src/utils/web-routers'
import LoginPage from 'src/pages/LoginPage'
import Footer from 'src/components/Footer'
import "src/app.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={webRoutes.homepage} element={<Home />} />
        <Route path={webRoutes.register} element={<RegisterPage />} />
        <Route path={webRoutes.myPage} element={<MyPage />} />
        <Route path={webRoutes.loginPage} element={<LoginPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App