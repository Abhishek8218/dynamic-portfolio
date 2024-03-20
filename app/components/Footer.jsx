import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <p className="copyright">
        Copyright &amp; Design By @codewithsadee - 2022
      </p>
      <a href="#top" className="back-top-btn">
        <span className="span">Back To Top</span>
        <FaArrowUp />
      </a>
    </div>
  </footer>
  )
}

export default Footer