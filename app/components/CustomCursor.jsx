'use client'

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
 const [cursorPosition, setCursorPosition] = useState({ posX: 0, posY: 0 });
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
    const cursors = document.querySelectorAll("[data-cursor]");
    const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ posX: clientX, posY: clientY });

      cursors.forEach(cursor => {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      });

      setTimeout(() => {
        cursors[1].style.left = `${clientX}px`;
        cursors[1].style.top = `${clientY}px`;
      }, 120);
    };

    const handleMouseOver = (e) => {
      
      setIsHovered(true);
      cursors.forEach(cursor => cursor.classList.add("hovered"));
    };

    const handleMouseOut = (e) => {
       
      setIsHovered(false);
      cursors.forEach(cursor => cursor.classList.remove("hovered"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    hoveredElements.forEach(element => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoveredElements.forEach(element => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
 }, []);

 return (
    <>
      <div className={`cursor-dot`} data-cursor style={{ left: cursorPosition.posX, top: cursorPosition.posY }} />
      <div className={`cursor-outline`} data-cursor style={{ left: cursorPosition.posX, top: cursorPosition.posY }} />
    </>
 );
};

export default CustomCursor;
