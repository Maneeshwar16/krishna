import React from 'react';

export default function BhagvadGitaCourses() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Bhagavad Gita Courses</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Understanding Life's Eternal Wisdom</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Course Offerings</h3>
                <ul className="space-y-3">
                  <li>Introduction to Bhagavad Gita</li>
                  <li>Advanced Study of Gita</li>
                  <li>Gita in Daily Life</li>
                  <li>Online Gita Study Groups</li>
                </ul>
              </div>

              <p>
                Our Bhagavad Gita courses provide a systematic study of this timeless spiritual text. 
                Through structured lessons, interactive discussions, and practical applications, 
                participants gain deep insights into life's fundamental questions.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Course Features</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Expert guidance from experienced teachers</li>
                  <li>Interactive learning sessions</li>
                  <li>Practical application workshops</li>
                  <li>Study materials and resources</li>
                  <li>Certificate upon completion</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Enrollment Information</h3>
                <p>
                  New courses begin regularly throughout the year. Both in-person and online options 
                  are available. Contact our education department for current course schedules and 
                  enrollment details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 