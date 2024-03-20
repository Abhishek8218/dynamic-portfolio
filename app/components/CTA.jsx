import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
const CTA = () => {
  return (
   
    <section className="section cta" aria-label="work with me">
    <div className="container">
      <h2 className="title h2 section-title text-center">
        Let`s Work Together On Your Next Project!
      </h2>
      <a href="#" className="btn btn:hover">
        <span className="span">Hire Me Now</span>
        <IoMdArrowRoundForward />
      </a>
    </div>
  </section>
  )
}

export default CTA