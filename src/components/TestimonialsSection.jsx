import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'KHUSHI GUPTA',
      company: 'Amazon',
      role: 'SDE-I',
      content: 'Coding Ninjas taught me how to think programmatically. The structured path and mentor support were instrumental in clearing my Amazon interviews. The DSA course is phenomenally structured.',
      image: 'https://ui-avatars.com/api/?name=KHUSHI+GUPTA&background=F05A28&color=fff'
    },
    {
      id: 2,
      name: 'RAHUL PASWAN',
      company: 'Google',
      role: 'Software Engineer',
      content: 'Switching from a non-CS background seemed impossible until I joined the Web Dev Bootcamp. The projects I built were exactly what product companies look for in a modern portfolio.',
      image: 'https://ui-avatars.com/api/?name=RAHUL+PASWAN&background=1D1D23&color=fff'
    },
    {
      id: 3,
      name: 'ASHISH KR YADAV',
      company: 'Microsoft',
      role: 'SDE-II',
      content: 'The competitive programming track boosted my confidence. The community is vibrant, and the platform UI for solving coding issues is seamless. Highly recommended for sincere learners.',
      image: 'https://ui-avatars.com/api/?name=ASHISH+KR+YADAV&background=F8F9FA&color=1D1D23'
    }
  ];

  return (
    <div className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories from our <span className="text-gradient">Ninjas</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Look at what our alumni at top tech companies have to say about their learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
              <Quote className="w-10 h-10 text-orange-100 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-orange-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="text-sm text-gray-500 font-medium">
                    {testimonial.role} <span className="text-brand-orange">@ {testimonial.company}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
