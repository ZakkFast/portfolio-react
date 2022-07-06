import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Zakk. Feel free to look around and get in touch!</p>
          </div>
          <div>
            <p>
              I specialize in creating elegant, professional web applications
              that not only deliever, but amaze and stun, all while utilizing the
              latest in W3C practices and standards. Whether you're a business
              that needs digital marketplace or solutions, or a Content Creator
              looking to cut our their own slice of the digtial space, I am here
              for you. So if you are in need of inspiring, creative and
              functional solutions, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
