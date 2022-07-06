import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
      <Link to="home" smooth={true} duration={500}>
          <img className="cursor-pointer" src={logo2} alt="logo" style={{ width: '50px' }} />
      </Link>
        </div>
      {/* Nav-links */}
      <ul className="hidden md:flex">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-[#ed6a5a] hover:animate-pulse">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="hover:text-[#ed6a5a] hover:animate-pulse">About</li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="hover:text-[#ed6a5a] hover:animate-pulse">Projects</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-[#ed6a5a] hover:animate-pulse">
            Skill Set
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-[#ed6a5a] hover:animate-pulse">Contact</li>
        </Link>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-30">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-600 text-[#444] hover:text-gray-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/zachary-fast/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-[#333] text-[#444] hover:text-gray-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/ZakkFast"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-600 text-[#444] hover:text-gray-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://twitter.com/ZakkFast"
              target="_blank"
              rel="noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-[#333] text-[#444] hover:text-gray-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://drive.google.com/file/d/1eXcnBbogzD6bM09YQ4gr0W33YDj1qgWF/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
