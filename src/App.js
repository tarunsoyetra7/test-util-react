import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
import AboutUs from './Component/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './Component/ContactUs';
import Alert from './Component/Alert';

function App() {

  const[mode , setMode] = useState('light');

  const[darkModeTextColor , setDarkModeTextColor] = useState('#212529');

  const[alert , setAlert] = useState(null);

  const[textAreaStyle , setTextAreaStyle] = useState({
    backgroundColor: '#f8f9fa',
    color: '#000'
  });

  const [animation, setAnimation] = useState("slide-in");

  const showAlert = (message) => {
      setAnimation("slide-in");
      setAlert({
        msg: message
      });
      setTimeout  (() => {
        setAnimation("slide-out");
      }, 1500);
      setTimeout  (() => {
        setAlert(null);
      }, 1800);   
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      setDarkModeTextColor('#212529');
      setTextAreaStyle({
        backgroundColor: '#f8f9fa',
        color: '#000'
      });
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled")
    } else {
      setMode('dark');
      setDarkModeTextColor('#ffffffc2')
      document.body.style.backgroundColor = '#001c38';
      setTextAreaStyle({
        backgroundColor: '#01203f',
        color: '#dbdbdb'
      });
      showAlert("Dark Mode Enabled");
    }
  }


  return (
    <>
    
    <Router basename='/test-util-react'>
      <Navbar mode = {mode} toggleMode = {toggleMode} title = "Text Utility" 
      darkModeTextColor = {darkModeTextColor}/>
      <Alert alert={alert} animation={animation}/>
      <Routes>
        <Route path="/" element={<TextBox mode = {mode} heading = "Enter Your Text Below" textAreaStyle = {textAreaStyle}  showAlert = {showAlert}/>} />
        <Route path="/about" element={<AboutUs textAreaStyle = {textAreaStyle} mode = {mode} />} />
        <Route path="/contact" 
        element={<ContactUs textAreaStyle = {textAreaStyle}  mode = {mode} />}
         />
      </Routes>
    </Router>
    </>
  );
}

export default App;
