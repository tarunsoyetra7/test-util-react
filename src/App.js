import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
import AboutUs from './Component/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './Component/ContactUs';

function App() {

  const[mode , setMode] = useState('light');

  const[darkModeTextColor , setDarkModeTextColor] = useState('#212529');

  const[textAreaStyle , setTextAreaStyle] = useState({
    backgroundColor: '#fff',
    color: '#000'
  });

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      setDarkModeTextColor('#212529');
      setTextAreaStyle({
        backgroundColor: '#fff',
        color: '#000'
      });
      document.body.style.backgroundColor = '#fff';
    } else {
      setMode('dark');
      setDarkModeTextColor('#ffffffc2')
      document.body.style.backgroundColor = '#001c38';
      setTextAreaStyle({
        backgroundColor: '#001c38',
        color: '#dbdbdb'
      });
    }
  }


  return (
    <>
    
    <Router basename='/test-util-react'>
      <Navbar mode = {mode} toggleMode = {toggleMode} title = "Text Utility" 
      darkModeTextColor = {darkModeTextColor}/>
      <Routes>
        <Route path="/" element={<TextBox mode = {mode} heading = "Enter Your Text Below" textAreaStyle = {textAreaStyle} />} />
        <Route path="/about" element={<AboutUs textAreaStyle = {textAreaStyle} mode = {mode} />} />
        <Route path="/contact" 
        element={<ContactUs textAreaStyle = {textAreaStyle} />}
         />
      </Routes>
    </Router>
      {/* <TextBox mode = {mode} heading = "Enter Your Text Below" textAreaStyle = {textAreaStyle}/> */}
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
