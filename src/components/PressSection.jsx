import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

const PressSection = () => {
  const articles = [
    {
      source: "CXOToday",
      title: "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
      link: "#"
    },
    {
      source: "Times of India",
      title: "Young professionals must embrace continuous upskilling in the age of AI",
      link: "#"
    },
    {
      source: "Economic Times",
      title: "Tech grads sign up for 'bootcamps' to be more employable",
      link: "#"
    }
  ];

  return (
    <div className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Coding Ninjas in the <span className="text-brand-orange">Spotlight</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              See what the top media publications are saying about our impact on the tech education ecosystem.
            </p>
          </div>
          <button className="hidden md:flex items-center text-brand-orange font-semibold hover:text-white transition-colors">
            View all press releases <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link} 
              className="group block p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-brand-orange transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-400 text-sm font-bold uppercase tracking-wider">
                  <Newspaper className="w-4 h-4 mr-2" />
                  {article.source}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors leading-relaxed">
                "{article.title}"
              </h3>
            </a>
          ))}
        </div>
        
        <button className="md:hidden mt-8 flex items-center text-brand-orange font-semibold hover:text-white transition-colors">
          View all press releases <ExternalLink className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PressSection;
