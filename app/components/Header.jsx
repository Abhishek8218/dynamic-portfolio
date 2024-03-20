'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdOutlineClose} from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const Header = () => {
  
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isOverlayActive, setOverlayActive] = useState(false);

  // Function to toggle navbar and overlay visibility
  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
    setOverlayActive(!isOverlayActive);
    document.body.classList.toggle("nav-active");
  };

  // Function to close navbar and overlay
  const closeNavbar = () => {
    setNavbarActive(false);
    setOverlayActive(false);
    document.body.classList.remove("nav-active");
  };

  // Array of navigation items
  const navItems = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'Services', href: '#service' },
    { id: 3, text: 'About', href: '#about' },
    { id: 4, text: 'Project', href: '#project' },
    { id: 5, text: 'Review', href: '#review' },
    { id: 6, text: 'Contact', href: '#contact' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      if (window.scrollY > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" data-header="">
      <div className="container">
        <a href="#" className="logo">
          <Image src="logo.svg" width={84} height={26} alt="logo" />
        </a>
        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar="">
          <div className="navbar-top">
            <a href="#" className="logo">
              <Image
                src="logo.svg"
                width={84}
                height={26}
                alt="logo"
              />
            </a>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleNavbar}
              data-nav-toggler=""
            >
         
              <MdOutlineClose />
            </button>
          </div>
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.id}>
               
                <Link href={item.href} legacyBehavior>
                  <a className="navbar-link" onClick={closeNavbar} data-nav-link>
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className="btn btn:hover">
          <span className="span">Get A Quote</span>
       
          <IoMdArrowForward />
        </a>
        <button
          className="nav-open-btn btn:hover"
          aria-label="open menu"
          onClick={toggleNavbar}
          data-nav-toggler=""
        >
          <span className="line line-1" />
          <span className="line line-2" />
        </button>
        <div className={`overlay ${isOverlayActive ? 'active' : ''}`} data-overlay="" data-nav-toggler="" />
      </div>
    </header>
  );
};

export default Header