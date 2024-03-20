import Image from "next/image";

const Interview = () => (
    <div className="tab-content" data-tab-content="interview">
       <div className="grid-list">
         {/* Interview content */}
         <div className="interview-card img-holder" data-tilt="">
           <Image
             src="/interview-1.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         <div className="interview-card img-holder" data-tilt="">
           <Image
             src="/interview-2.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         <div className="interview-card img-holder" data-tilt="">
           <Image
             src="/interview-3.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         {/* Additional interview cards */}
       </div>
    </div>
   );
   
   export default Interview;
   