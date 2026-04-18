import React from 'react';
import { MessageSquare, Bot, Briefcase, FileText, Mic, Trophy } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Get instant Doubt Support",
      description: "24/7 support with our Teaching assistants & Ninja AI",
      icon: <MessageSquare className="w-8 h-8 text-brand-orange" />
    },
    {
      title: "Interview prep like a pro with AI",
      description: "Practice interviews, refine your resume, and improve with AI-powered feedback.",
      icon: <Bot className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Curated Job boards",
      description: "400+ live jobs & new jobs added everyday",
      icon: <Briefcase className="w-8 h-8 text-green-500" />
    },
    {
      title: "Profile building",
      description: "Get tailored feedback on improving your Resume, LinkedIn and Github profiles",
      icon: <FileText className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Weekly talks with CXO's",
      description: "Learn from the best in the industry by interacting with top talent",
      icon: <Mic className="w-8 h-8 text-red-500" />
    },
    {
      title: "Workshops & Hackathons",
      description: "Get a chance to network with peers and constantly improve your skillset",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The right <span className="text-gradient">AI tools</span> integrated into your curriculum
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn the tools that matter, integrate them into your workflow, and stay ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
