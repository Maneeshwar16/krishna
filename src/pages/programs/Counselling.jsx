import React from 'react';

export default function Counselling() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Spiritual Counselling</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Personal Guidance & Support</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
                <ul className="space-y-3">
                  <li>One-on-one spiritual guidance</li>
                  <li>Family counselling sessions</li>
                  <li>Marriage counselling</li>
                  <li>Youth mentorship programs</li>
                </ul>
              </div>

              <p>
                Our spiritual counselling services provide personalized guidance based on Vedic wisdom 
                to help you navigate life's challenges. Our experienced counsellors offer practical 
                solutions while maintaining spiritual principles.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Areas of Support</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Personal spiritual growth</li>
                  <li>Relationship guidance</li>
                  <li>Work-life balance</li>
                  <li>Stress management through spiritual practices</li>
                  <li>Life purpose and direction</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Schedule a Session</h3>
                <p>
                  Counselling sessions are available by appointment. Please contact our office to 
                  schedule a consultation with one of our spiritual counsellors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 