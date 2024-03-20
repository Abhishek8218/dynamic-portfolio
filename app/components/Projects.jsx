import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";

const Projects = ({ projects }) => (
 <section className="section project" aria-label="my latest projects" id="project">
    <ul className="slider-list">
      {projects.slice().reverse().map((project, index) => (
        <li key={index} className="slider-item">
          <div className="project-card text-center">
            <div className="card-banner img-holder has-before">
              <Image
                src={project.image.url}
                width={1000}
                height={763}
                loading="lazy"
                alt="project banner"
                className="img-cover"
              />
              <a href="#" className="btn btn:hover">
                <span className="span">Project Details</span>
                <IoMdArrowRoundForward />
              </a>
            </div>
            <div className="card-content">
              <p className="card-subtitle">Web, Product</p>
              <h3 className="title h3">
                <a href="#" className="card-title">
                 {project.title}
                </a>
              </h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
 </section>
);

export default Projects;
