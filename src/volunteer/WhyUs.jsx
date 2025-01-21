import React from 'react';
import GlobalImpactIcon from "../assets/image 21.png";
import FutureDemocracyIcon from '../assets/image 22.png';
import FlexibleFunIcon from '../assets/image 23.png';
import LearnGrowConnectIcon from '../assets/image 24.png';
import BePartChangeIcon from '../assets/image 25.png';
import WordCloudImage from '../assets/image 26.png'; 

const WhyVolunteerWithUs = () => {
  const benefits = [
    {
      title: 'Global Impact',
      description:
        'Yuvoice is a global, remote-first organisation, which means no matter where you are, you can be part of this incredible journey.',
      icon: GlobalImpactIcon,
    },
    {
      title: 'Future of Democracy',
      description:
        'We’re building a platform that connects millions to the causes that matter, rewarding real-world impact with online recognition.',
      icon: FutureDemocracyIcon, 
    },
    {
      title: 'Flexible & Fun',
      description:
        'Whether you’ve got a few hours a week or more time to give, there’s a role for you! We’re all about making volunteering fit your schedule, not the other way around.',
      icon: FlexibleFunIcon,
    },
    {
      title: 'Learn, Grow & Connect',
      description:
        'Gain real-world skills, expand your network, and collaborate with passionate people from every corner of the globe.',
      icon: LearnGrowConnectIcon,
    },
    {
      title: 'Be part of change',
      description:
        'You’ll be joining a mission to uplift marginalised communities, foster real friendships, and create change where it’s needed most.',
      icon: BePartChangeIcon,
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Volunteer with Us?</h2>
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side - Text and Icons */}
        <div className="flex-1 space-y-6 ">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 h-12"
              />
              <div className='flex items-baseline '>
                <h3 className="text-xl font-semibold text-gray-800 whitespace-nowrap leading-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-tight ">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-10">
          <img
            src={WordCloudImage}
            alt="Word Cloud"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyVolunteerWithUs;