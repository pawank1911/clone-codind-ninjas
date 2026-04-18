import React, { useState } from 'react';
import { BookOpen, Star, Code, Database, Layout } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    category: 'Foundation',
    rating: 4.8,
    reviews: '12k+',
    duration: '4 Months',
    icon: <Code className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-100',
    tags: ['C++', 'Java', 'Python']
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    category: 'Advanced',
    rating: 4.9,
    reviews: '8k+',
    duration: '6 Months',
    icon: <Layout className="w-6 h-6 text-brand-orange" />,
    color: 'bg-orange-50 border-orange-100',
    tags: ['MERN', 'React', 'Node.js']
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning',
    category: 'Advanced',
    rating: 4.7,
    reviews: '5k+',
    duration: '7 Months',
    icon: <Database className="w-6 h-6 text-green-500" />,
    color: 'bg-green-50 border-green-100',
    tags: ['Python', 'ML', 'Analytics']
  }
];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Empower your career with <span className="text-brand-orange">top-tier courses</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Structured curriculum, extensive practice, and expert guidance to help you become an elite developer.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Foundation', 'Advanced', 'Data Science'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col h-full">
              {/* Top Section */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl ${course.color} transition-transform group-hover:-translate-y-1`}>
                  {course.icon}
                </div>
                <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-700">{course.rating}</span>
                  <span className="text-xs text-gray-400">({course.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  {course.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div className="flex items-center text-gray-500 text-sm font-medium">
                   <BookOpen className="w-4 h-4 mr-2" />
                   {course.duration}
                </div>
                <button className="text-brand-orange font-semibold text-sm group-hover:underline">
                  Explore Course →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-orange text-base font-semibold rounded-lg text-brand-orange bg-transparent hover:bg-orange-50 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
