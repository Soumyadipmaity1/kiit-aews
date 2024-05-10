import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar2 from './Components/Navbar2/navbar2';
import Home from './Pages/Home/home';
import About from './Pages/AboutUs/about';
import Members from './Pages/Members/member';
import Events from './Pages/Events/event';
import Gallery from './Pages/Gallery/gallery';
import Blogs from './Pages/Blog/blog';
import Contact from './Pages/Contact/contact';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
