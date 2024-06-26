import React from 'react';
import Constant from '../_utils/Constant';
import { SignInButton } from '@clerk/nextjs';

const Hero = () => {
    return (
        <div>
            <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
   
        <span className='text-teal-600'> Upload, save</span> and easily  share your file in one place 
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
        {Constant.des}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
          href="#"
        >
       
          <SignInButton/>
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Hero;