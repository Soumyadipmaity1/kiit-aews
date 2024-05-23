import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar2 from './Components/Navbar2/navbar2';
import Home from './Pages/Home/home';
import About from './Pages/AboutUs/about';
import Members from './Pages/Members/member';
import Events from './Pages/Events/event';
import Gallery from './Pages/Gallery/gallery';
import Blogs from './Pages/Blog/blog';
import Contact from './Pages/Contact/contact';
import Footer from './Components/Footer/footer';
import Navbar1 from './Components/Navbar1/Navbar1';

const App = () => {
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  return (
    <Router>
      <Navbar1 />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
