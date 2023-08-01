import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-5'>
          With over 8 years of experience in web development, I always try to
          produce high-quality code which is testable and scalable.
          <br />
          In the last 3 years of my career, I mainly focused on JavaScript
          frameworks and I built a number of websites for both startup and large
          enterprise-level companies.
          <br />
          I always provided 100% satisfying results for my clients. Not only in
          frontend but also, have a strong background in back-end development
          including Express, Django Rest Framework, and Laravel.
          <br />
          And strong communication skills and great teamwork skill are other
          fortes. When I do my task, I don’t just complete it, I go the extra
          mile and make things better
        </p>
      </div>
    </div>
  );
};

export default About;
