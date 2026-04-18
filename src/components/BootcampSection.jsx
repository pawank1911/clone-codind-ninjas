import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const BootcampSection = () => {
  const features = [
    'Dedicated Placement Assistance',
    '1:1 Mentorship from Industry Experts',
    'Build 5+ Industry Level Projects',
    'Mock Interviews & Resume Building'
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-brand transform -skew-x-12 rounded-3xl opacity-10"></div>
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl z-10">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Job Bootcamp
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Fast-track your career with an intensive program designed to make you industry-ready. 9 Months to your dream job.
              </p>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex items-center justify-between">
                 <div>
                    <div className="text-sm font-bold text-brand-orange uppercase mb-1">Average Package</div>
                    <div className="text-3xl font-black text-gray-900">8.5 LPA</div>
                 </div>
                 <button className="px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-0.5">
                    Apply Now
                 </button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              A structured roadmap tailored for your <span className="text-gradient">Placement</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We focus heavily on fundamentals to ensure you crack the toughest interviews at top tech companies. Our structured approach minimizes confusion and maximizes output.
            </p>
            
            <div className="space-y-8">
              {[
                { step: '1', title: 'Language Fundas', desc: 'Master C++, Java or Python from scratch with robust fundamentals.' },
                { step: '2', title: 'Data Structures & Algorithms', desc: 'Crack the coding rounds of top product companies with problem solving skills.' },
                { step: '3', title: 'Development', desc: 'Build production-ready applications to make your resume stand out.' }
              ].map((item) => (
                 <div key={item.step} className="flex relative">
                    <div className="mr-6 flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-xl z-10">
                          {item.step}
                       </div>
                       {item.step !== '3' && (
                         <div className="w-px h-full bg-gray-200 absolute top-12 bottom-0 left-6 -translate-x-1/2"></div>
                       )}
                    </div>
                    <div className="pb-8">
                       <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                       <p className="text-gray-600">{item.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BootcampSection;
