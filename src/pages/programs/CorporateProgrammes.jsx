import React from 'react';

export default function CorporateProgrammes() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Corporate Programs</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Spiritual Wisdom in the Workplace</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Offerings</h3>
                <ul className="space-y-3">
                  <li>Leadership & Ethics Workshops</li>
                  <li>Stress Management Programs</li>
                  <li>Work-Life Balance Sessions</li>
                  <li>Corporate Meditation Classes</li>
                </ul>
              </div>

              <p>
                Our corporate programs bring the timeless wisdom of Vedic knowledge to the modern workplace. 
                Through practical workshops and interactive sessions, we help organizations create a more 
                balanced, ethical, and productive work environment.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Program Features</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Customized workshops for your organization</li>
                  <li>Expert facilitators with corporate experience</li>
                  <li>Practical application of spiritual principles</li>
                  <li>Interactive learning methods</li>
                  <li>Follow-up support and resources</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>
                  To learn more about our corporate programs or schedule a consultation, please contact 
                  our corporate outreach department. We can customize programs to meet your organization's 
                  specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 