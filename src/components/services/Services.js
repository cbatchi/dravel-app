import React from 'react';
import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.png';
import Service3 from '../../assets/service3.png';
import Service4 from '../../assets/service4.png';

import {ServiceContent, ServicesContent, ServicesSection} from './service.styled';

const Services = () => {
  const sources = [
    {
      image: Service1,
      title: "Choose Destination",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: Service2,
      title: "Explore the Place",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: Service3,
      title: "Start Your Journey",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: Service4,
      title: "Let's Enjoy",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ]
  return (
    <ServicesSection>
      <ServicesContent>
        {sources.map(({ image, title, description }, key) => (
          <ServiceContent key={key}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
          </ServiceContent>
        ))}
      </ServicesContent>
    </ServicesSection>
  )
}

export default Services