import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-dark-border py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-4">
          <Globe className="text-gray-500" size={24} />
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scarlet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-scarlet"></span>
            </span>
            <span>Available for Freelance</span>
          </div>
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/akj-666" className="text-sm font-semibold tracking-wide text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aldrin-k-johni-akjs345" className="text-sm font-semibold tracking-wide text-gray-400 hover:text-white transition-colors">LinkedIn</a>

        </div>

        <div className="text-xs text-gray-600 font-medium">
          &copy; {new Date().getFullYear()} Aldrin K Johni. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
