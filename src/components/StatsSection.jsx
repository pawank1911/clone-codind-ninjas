import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Highest CTC', value: '1Cr+' },
    { label: 'Average CTC', value: '12.8 LPA' },
    { label: 'Placement Rate', value: '94%' },
    { label: 'Hiring Partners', value: '1000+' },
  ];

  return (
    <div className="bg-brand-dark py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Our alumni work at top companies</h2>
          <p className="text-gray-400">Join the league of top engineers working in product-based companies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange opacity-10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 opacity-10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default StatsSection;
