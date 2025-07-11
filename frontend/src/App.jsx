import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyProfile from "./pages/MyProfile";
import MyApointments from "./pages/MyApointments";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";     
import About from "./pages/About";         
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupCard from './pages/SignupCard';
import LoginCard from "./pages/LoginCard";



const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
     
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyApointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
{/* <Route path="/login" element={<Login />} /> */}

         </Routes>

      <Footer/ >
    </div>
  );
};

export default App;
