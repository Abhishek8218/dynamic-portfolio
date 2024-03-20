import Image from "next/image";

const AboutMe = ({about, social}) => {
   
    
    
    return (

    
    <div className="tab-content active" data-tab-content="about">
       <div className="grid-list">
         <figure className="about-banner img-holder" data-tilt="">
           <Image
             src="/about-banner.jpg"
             width={570}
             height={420}
             loading="lazy"
             alt="about banner"
             className="img-cover"
           />
         </figure>
         <div className="about-content">
           <h2 className="h4 title section-title">
             A very small stage in a vast cosmic.
           </h2>
           <p className="section-text">
             {about.description}
           </p>
           <ul className="about-list">
             <li className="about-item">
               <p className="list-title">Name</p>
               <span className="span title h5">{about.name}</span>
             </li>
             <li className="about-item">
               <p className="list-title">Phone Number</p>
               <span className="span title h5">{about.phoneNumber}</span>
             </li>
             <li className="about-item">
               <p className="list-title">Email Address</p>
               <span className="span title h5">{about.email}</span>
             </li>
             <li className="about-item">
               <p className="list-title">Social Network</p>
               <div className="social-list">
                 {social.map((social,index) => (
                   <a key={index} href="#" className="social-link h6" title={social.platform}>
                    <Image src={social.image.url} alt="social icon" height={20} width={20}/>
                   </a>
                 ))}
               </div>
             </li>
           </ul>
         </div>
       </div>
    </div>
   );
                 };
   
   export default AboutMe;
   