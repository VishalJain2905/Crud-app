import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Adduser';
import Edit from './components/users/Edituser';
import User from './components/users/Viewuser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
   <>
   <Router>
    <Navbar />
     <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/About" element={<About />} /> 
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Users/add" element={<Users />} />
      <Route exact path="/Users/edit/:id" element={<Edit />} />
      <Route exact path="/Users/user/:id" element={<User />} />
     </Routes>
   </Router>
   </>
  );
}

export default App;

