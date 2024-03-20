import Image from "next/image";

const Skillset = ({ skills }) => (
 <div className="tab-content" data-tab-content="skillset">
     <div className="grid-list">
       <div className="skill-content">
         <h3 className="h4 title section-title">
         We help to create visual strategies.
         </h3>
         <p className="section-text">
         A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star stuff harvesting star light.
         </p>
         <div className="skill-list-container">
           <ul className="skill-list">
             {skills.map((skill, index) => (
               <li key={index}>
                 <div className="skill-wrapper">
                   <span className="span">{skill.name}</span>
                   <span className="value">{skill.percentage}%</span>
                 </div>
                 <div className="progress-bar">
                   <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                   />
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </div>
       <figure className="skill-banner img-holder" data-tilt="">
         <Image
           src="/skill-banner.jpg"
           width={570}
           height={420}
           loading="lazy"
           alt="skill banner"
           className="img-cover"
         />
       </figure>
     </div>
 </div>
);

export default Skillset;
