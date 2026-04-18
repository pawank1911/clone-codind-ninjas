import React from 'react';

const HiringPartnersSection = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center md:text-left">
          9+ years of transforming careers
        </h2>

        <div className="border border-gray-800 rounded-lg overflow-hidden bg-black">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-b border-gray-800">
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800">
              <span className="text-xl font-bold tracking-tighter">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800">
              <div className="flex items-center text-[#fc8019] font-bold text-xl tracking-tighter">
                <svg className="w-5 h-5 mr-1 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l5 2.5-5 2.5z"/></svg>
                SWIGGY
              </div>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-tighter relative">
                  amazon
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#ff9900] fill-current" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q50 20 100 10 Q50 15 0 10 Z" /></svg>
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800">
              <span className="text-2xl font-bold text-[#E50914] tracking-tighter uppercase font-sans transform scale-y-110">Netflix</span>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="grid grid-cols-2 gap-[2px]">
                  <div className="w-2.5 h-2.5 bg-[#f25022]"></div>
                  <div className="w-2.5 h-2.5 bg-[#7fba00]"></div>
                  <div className="w-2.5 h-2.5 bg-[#00a4ef]"></div>
                  <div className="w-2.5 h-2.5 bg-[#ffb900]"></div>
                </div>
                <span className="text-lg font-semibold text-gray-300">Microsoft</span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-5">
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800 border-b md:border-b-0">
               <span className="text-2xl font-bold text-[#E50914] tracking-tighter uppercase font-sans transform scale-y-110">Netflix</span>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800 border-b md:border-b-0">
               <span className="text-2xl font-bold text-[#cb202d] italic tracking-tighter">zomato</span>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800 border-b md:border-b-0">
               <span className="text-xl font-bold text-white font-serif text-center leading-tight">Goldman<br/>Sachs</span>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center border-r border-gray-800 border-b md:border-b-0">
               <div className="flex items-center space-x-1">
                 <span className="text-xl font-bold text-[#2874f0] italic tracking-tighter">Flipkart</span>
                 <div className="w-5 h-5 bg-[#ffc200] rounded-sm transform -rotate-12 flex items-center justify-center">
                   <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                 </div>
               </div>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center">
               <div className="flex items-center font-bold text-lg italic">
                 <span className="text-[#003087]">Pay</span><span className="text-[#0079C1]">Pal</span>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HiringPartnersSection;
