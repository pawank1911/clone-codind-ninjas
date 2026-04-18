import React from 'react';
import { Globe, MessageCircle, Share2, Video, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-brand-orange tracking-tight mb-6">Coding Ninjas</h3>
            <p className="text-gray-400 mb-8 max-w-sm">
              We empower technical talent through continuous learning, structured mentorship, and community-driven excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-all">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-all">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Coding Ninjas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Pricing & Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Job Bootcamp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Code 360</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Professional Certifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Student Chapters</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Toll free: <span className="text-white font-semibold block mt-1">+91-7255853540</span></li>
              <li>Email: <a href="mailto:contact@codingninjas.com" className="text-white hover:underline block mt-1">psaw59693@gmail.com</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © Coding Ninjas. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span>Powered by <strong className="text-white">PKnayak</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
