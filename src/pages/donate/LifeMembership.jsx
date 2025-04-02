import React from 'react';

export default function LifeMembership() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Life Membership</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Become a Life Member</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
                <ul className="space-y-3">
                  <li>Lifetime membership privileges</li>
                  <li>Special access to temple events</li>
                  <li>Priority in spiritual programs</li>
                  <li>Regular updates and newsletters</li>
                </ul>
              </div>

              <p>
                Life membership at ISKCON is a special opportunity to become an integral part of our 
                spiritual community. As a life member, you'll have access to exclusive benefits and 
                opportunities to deepen your spiritual journey.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Membership Details</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>One-time membership fee</li>
                  <li>Valid for lifetime</li>
                  <li>Transferable to family members</li>
                  <li>Includes all temple facilities access</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
                <p>
                  To become a life member, please visit our temple office or contact our membership 
                  department. We'll guide you through the process and help you complete the necessary 
                  formalities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 