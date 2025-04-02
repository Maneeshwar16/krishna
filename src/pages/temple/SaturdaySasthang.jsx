import React from 'react';

export default function SaturdaySasthang() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Saturday Sasthang</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Weekly Spiritual Gathering</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Schedule</h3>
                <ul className="space-y-3">
                  <li>5:00 PM - Kirtan & Bhajans</li>
                  <li>5:30 PM - Spiritual Discourse</li>
                  <li>6:30 PM - Interactive Q&A Session</li>
                  <li>7:00 PM - Evening Aarthi</li>
                  <li>7:30 PM - Prasadam Distribution</li>
                </ul>
              </div>

              <p>
                Join us every Saturday for an enriching spiritual experience. Our Saturday Sasthang 
                program includes devotional singing, enlightening discussions on Vedic scriptures, 
                and the opportunity to connect with fellow devotees.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Special Features</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Special guest speakers and visiting devotees</li>
                  <li>Youth participation and activities</li>
                  <li>Group discussions on spiritual topics</li>
                  <li>Special prasadam distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 