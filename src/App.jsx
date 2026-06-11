import { Routes, Route } from 'react-router-dom';

import './index.css'
import Homepage from './pages/Homepage';
// import ApiMenu from './pages/ApiMenu';
import Contact from './pages/Contact';
import Menus from './pages/Menus';


function App() {

  return (
     <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/menu" element={<Menus />} />
      {/* <Route path="/menu" element={<ApiMenu />} /> */}
      
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  )
}

export default App
