import React from 'react';
import evolve from '../assets/portfolio/evolve_foresite.jpg';
import skyscanner from '../assets/portfolio/skyscanner.jpg';
import smartmint from '../assets/portfolio/smart_mint.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: evolve,
      link: 'https://www.evolvemep.com/foresite',
    },
    {
      id: 2,
      src: skyscanner,
      link: 'https://skyscanner.com',
    },
    {
      id: 3,
      src: smartmint,
      link: 'https://smartmint.pastel.network',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt='projects'
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => window.open(link, '_blank')}
                >
                  Go to site
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
