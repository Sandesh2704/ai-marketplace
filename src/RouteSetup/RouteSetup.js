import React  from 'react'
import { Routes, Route, } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import Agents from '../Pages/Agents'
import Marketplace from '../Pages/Marketplace';
import Purchased from '../Pages/Purchased';
import Upload from '../Pages/Upload';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function RouteSetup() {



  return (
    <>
      <BrowserRouter>
      <NavBar />
      <div className='overflow-hidden px-4 md:px-7 xl:px-[150px] py-10'>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents/>} />
            <Route path="/marketplace" element={<Marketplace/>} />
            <Route path="/purchased" element={<Purchased/>} />
            <Route path="/upload" element={<Upload/>} />
          </Routes>
          </div>
          <Footer />
         
      </BrowserRouter>
    </>
  )
}
