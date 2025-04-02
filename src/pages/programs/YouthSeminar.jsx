import React from 'react';

export default function YouthSeminar() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Youth Seminar</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Empowering Youth Through Spiritual Wisdom</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="space-y-3">
                  <li>Weekly Sessions: Every Saturday</li>
                  <li>Time: 3:00 PM - 4:30 PM</li>
                  <li>Age Group: 16-25 years</li>
                  <li>Location: ISKCON Youth Center</li>
                </ul>
              </div>

              <p>
                Our Youth Seminar program is designed to help young individuals navigate life's challenges 
                through the timeless wisdom of Vedic knowledge. Join us for interactive sessions, 
                engaging discussions, and practical spiritual guidance.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Program Features</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Interactive workshops and discussions</li>
                  <li>Leadership development activities</li>
                  <li>Spiritual retreats and outings</li>
                  <li>Mentorship opportunities</li>
                  <li>Service projects and community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 