import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-[#1c1c1c] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-2">
                 <div className="w-4 h-4 bg-brand-orange rounded-sm"></div>
              </div>
              <span className="text-xl font-medium text-white tracking-tight">
                coding<span className="font-light text-gray-300">ninjas</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="group relative py-5 cursor-pointer flex items-center space-x-2 text-white hover:text-brand-orange transition-colors font-medium text-[15px]">
                <span>For working professionals</span>
                <ChevronDown className="w-4 h-4 text-white group-hover:text-brand-orange" />
              </div>
              <div className="group relative py-5 cursor-pointer flex items-center space-x-2 text-white hover:text-brand-orange transition-colors font-medium text-[15px]">
                <span>For College Students</span>
                <ChevronDown className="w-4 h-4 text-white group-hover:text-brand-orange" />
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center">
            <button className="bg-brand-orange text-white px-8 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 text-sm">
              Login
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button className="text-white hover:text-brand-orange">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
