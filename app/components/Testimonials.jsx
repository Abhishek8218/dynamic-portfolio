
import Image from "next/image";

const Testimonials = ({ testimonials }) => (
 <section className="section testi" aria-label="what our client says" id="review">
    <div className="container">
      <div className="testi-content">
        <ul className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testi-item">
              <div className="testi-content-wrapper">
                <blockquote className="title h4 section-text">
                 {testimonial.review}
                </blockquote>
                <div className="profile-card">
                 <figure className="card-banner img-holder">
                   <Image
                      src={testimonial.image.url}
                      width={70}
                      height={70}
                      loading="lazy"
                      alt={testimonial.name}
                      className="img-cover"
                   />
                 </figure>
                 <div>
                   <p className="title h5 card-title">{testimonial.name}</p>
                   <p className="card-subtitle">{testimonial.position}</p>
                 </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
 </section>
);

export default Testimonials;
