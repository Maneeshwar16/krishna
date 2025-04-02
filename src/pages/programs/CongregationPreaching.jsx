import React from 'react';

export default function CongregationPreaching() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Congregation Preaching</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Spreading Spiritual Wisdom</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Program Overview</h3>
                <ul className="space-y-3">
                  <li>Weekly Congregation Meetings</li>
                  <li>Spiritual Discourse Sessions</li>
                  <li>Community Outreach Programs</li>
                  <li>Special Festival Celebrations</li>
                </ul>
              </div>

              <p>
                Our congregation preaching program aims to spread the message of Krishna consciousness 
                throughout the community. Through regular meetings, spiritual discourses, and community 
                events, we create opportunities for everyone to connect with divine wisdom.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Activities & Initiatives</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Weekly spiritual discourses</li>
                  <li>Community outreach programs</li>
                  <li>Festival celebrations</li>
                  <li>Cultural exchange events</li>
                  <li>Spiritual retreats</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join Our Congregation</h3>
                <p>
                  We welcome everyone to join our congregation. Whether you're new to spiritual practice 
                  or have been on the path for years, there's a place for you in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 