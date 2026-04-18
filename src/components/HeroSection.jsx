import React from 'react';
import { Zap, Code, Bot, Sparkles, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-24 min-h-screen flex items-center bg-[#09090b] overflow-hidden font-sans">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/3 left-10 transform -rotate-12 w-16 h-16 bg-[#1a1a24] border border-gray-700/50 rounded-xl flex items-center justify-center shadow-2xl opacity-80 backdrop-blur-sm z-0">
         <Sparkles className="w-8 h-8 text-gray-500" />
      </div>
      <div className="absolute top-1/4 left-1/3 transform rotate-12 w-20 h-20 bg-[#1a1a24]/80 border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-2xl opacity-90 backdrop-blur-sm z-0">
         <Code className="w-10 h-10 text-gray-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 transform -rotate-6 w-24 h-24 bg-[#1a1a24] border border-gray-700/30 rounded-3xl flex items-center justify-center shadow-2xl opacity-90 backdrop-blur-sm z-0">
         <Bot className="w-12 h-12 text-blue-500/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
            <div className="mb-8 inline-flex items-center px-5 py-2 rounded-full border border-[#f05a28]/30 bg-[#1e1412] shadow-sm">
              <Zap className="w-4 h-4 text-[#f05a28] mr-2 fill-current" />
              <span className="text-gray-300 text-sm font-medium tracking-wide">Ready to 10X your career!</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-12">
              Give your career an <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-white">unfair AI advantage</span>
            </h1>

            {/* Glowing Orb Placeholder (Representing the hand/orb in image) */}
            <div className="relative w-64 h-64 mt-12 mb-12 lg:mb-0 mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-white rounded-full blur-[40px] opacity-20"></div>
               <div className="absolute inset-8 bg-blue-400 rounded-full blur-[30px] opacity-40"></div>
               <div className="absolute inset-16 bg-white rounded-full blur-[10px] shadow-[0_0_80px_40px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>
          
          {/* Right Content Area - Form Card */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto z-20">
            <div className="bg-[#242633] border border-gray-600/30 rounded-[32px] p-8 shadow-2xl backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">Let's find the right course for you</h2>
              
              <div className="space-y-6">
                {/* Experience Radios */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-4 block">Experience</label>
                  <div className="space-y-3">
                    {[
                      'Working Professional - Technical Roles',
                      'Working Professional - Non Technical',
                      'College Student - Final Year',
                      'College Student - 1st to Pre-final Year',
                      'Others'
                    ].map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-gray-500 bg-transparent group-hover:border-gray-400 transition-colors">
                            {/* Empty for unchecked, we'd add an inner dot if selected */}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Topic Select */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Select topic of interest</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-[#1e1e24] border border-gray-600/50 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-gray-400 transition-colors cursor-pointer">
                      <option>Select your options/choices</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Inputs */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Name</label>
                  <input type="text" placeholder="Enter name" className="w-full bg-[#1e1e24] border border-gray-600/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Phone Number</label>
                  <div className="relative">
                    <input type="tel" placeholder="Enter phone number" className="w-full bg-[#1e1e24] border border-gray-600/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-3 h-3 bg-brand-orange rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                  <input type="email" placeholder="Enter email" className="w-full bg-[#1e1e24] border border-gray-600/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors" />
                </div>

                {/* Form Submit Button */}
                <div className="pt-2">
                  <button className="w-full bg-[#f05a28] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#d94a1d] transition-colors shadow-lg shadow-orange-500/25">
                    Find your course
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
