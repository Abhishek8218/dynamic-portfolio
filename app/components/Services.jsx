// components/Services.js

import Image from 'next/image';
import React from 'react';

const Services = ({ services }) => {
 return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">
        <ul className="service-list">
          {services.slice(0,5).map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-card">
                <div className="card-icon" style={{ width: '80px', height: '80px' }}>
                 {service.image && service.image.url && (
                    <Image
                      src={service.image.url}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt={service.name}
                      layout='responsive'
                    />
                 )}
                </div>
                <h3 className="card-title">
                 <a href="#">
                    {service.name}
                 </a>
                </h3>
              
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
 );
};

export default Services;