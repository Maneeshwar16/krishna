import React from 'react';

export default function SocialWork() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Social Work</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Serving Humanity with Love</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Initiatives</h3>
                <ul className="space-y-3">
                  <li>Food Distribution Programs</li>
                  <li>Education Support</li>
                  <li>Healthcare Assistance</li>
                  <li>Community Development</li>
                </ul>
              </div>

              <p>
                Our social work initiatives are based on the principle of serving humanity with love and 
                compassion. Through various programs, we reach out to those in need, providing support 
                and assistance while sharing the message of spiritual wisdom.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Program Areas</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Daily food distribution to needy families</li>
                  <li>Educational support for underprivileged children</li>
                  <li>Healthcare camps and medical assistance</li>
                  <li>Community development projects</li>
                  <li>Disaster relief and emergency support</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                <p>
                  We welcome volunteers and supporters to join our social work initiatives. Whether you 
                  can contribute time, resources, or expertise, there are many ways to make a difference 
                  in the lives of others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 