import React, { Component, useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

function App() {
  const [resumeData, setResumeData] = useState({});
  useEffect(() => {
    const getResumeData = async () => {
      fetch(
        '/resumeData.json'
      )
        .then(response => response.json())
        .then(result => {
          setResumeData(result)
        })
        .catch((error) => {
          console.log('erroor>>>>', error)
        });
    }

    getResumeData();
  }, []);

  return (
    <div className="app">
      {Object.entries(resumeData).length !== 0 ? <>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </> :
        <div className="app_loader">
          <img alt="loader" src={'images/loader.gif'} />
        </div>}
    </div>
  )
}

export default App;
