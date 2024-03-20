
'use client'
import React, { useState, useEffect } from 'react';

import { fetchUserData } from './api/data';
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Tabs from './components/Tabs';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function HomePage() {
  const [userData, setUserData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData();
     
        setUserData(data);
        setIsLoaded(true); // Set loaded state to true when data is fetched
      } catch (error) {
        
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Function to set loaded state to true when DOM content is loaded
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("DOMContentLoaded", handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener("DOMContentLoaded", handleLoad);
    };
  }, []);

  if (!isLoaded || !userData) {
    return (
      <div className="preloader" data-preloader>
        <span className="line"></span>
      </div>
    );
  }



 return (
    <div className='main'>
      
      <Header/>
      <Hero user={userData.user.about} />
     <Services services={userData.user.services}/>
     <Tabs about={userData.user.about} social={userData.user.social_handles} skills={userData.user.skills}/>
     <CTA/>
     <Projects projects={userData.user.projects} />
     <Testimonials testimonials={userData.user.testimonials}/>
     <Contact/>
     <Footer/>  
     
    </div>
 );
}

export default HomePage;
