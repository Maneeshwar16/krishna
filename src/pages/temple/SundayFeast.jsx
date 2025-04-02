import React from 'react';

export default function SundayFeast() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Sunday Feast</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Weekly Spiritual Celebration</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Schedule</h3>
                <ul className="space-y-3">
                  <li>4:00 PM - Kirtan & Bhajans</li>
                  <li>4:30 PM - Spiritual Discourse</li>
                  <li>5:30 PM - Evening Aarthi</li>
                  <li>6:00 PM - Prasadam Distribution</li>
                </ul>
              </div>

              <p>
                Join us every Sunday for our weekly feast celebration. The Sunday Feast program includes 
                soul-stirring kirtan, enlightening spiritual discourse, and delicious prasadam. It's a 
                perfect opportunity to connect with the divine and fellow devotees.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Special Features</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Special feast prasadam prepared with love</li>
                  <li>Children's program and activities</li>
                  <li>Cultural performances</li>
                  <li>Community gathering and fellowship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 