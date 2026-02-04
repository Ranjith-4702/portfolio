import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2026 Ranjith K S. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://github.com/Ranjith-4702" className="hover:text-white"><FaGithub size={20}/></a>
                <a href="https://www.linkedin.com/in/ranjith-ks-09ba9b381" className="hover:text-white"><FaLinkedin size={20}/></a>
            </div>
        </div>
    </div>
  );
}

export default Footer;