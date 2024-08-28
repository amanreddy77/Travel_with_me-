// ServicesList.jsx
import React from 'react';
import ServicesCard from './ServicesCard';
import { MdDirectionsCar } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";

const ServicesList = () => {
  const services = [
    {
      title: 'Trains',
      description: 'Explore thrilling destinations, and adventure tours on Trains.',
      icon: <IoMdBus />,
    },
    {
      title: 'Flights',
      description: 'Let us handle the details! you fly and enjoy your dream vacation.',
      icon: <FaPlaneDeparture />,
    },
    {
      title: 'Travel vehicles',
      description: 'Experience all the travel modes according to your comfort.',
      icon: <MdDirectionsCar/>,
    },
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
