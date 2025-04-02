import React from 'react';

export default function OurMission() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Our Mission</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">ISKCON's Seven Purposes</h2>
              
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  To systematically propagate spiritual knowledge to society at large and to educate all people in the 
                  techniques of spiritual life in order to check the imbalance of values in life and to achieve real 
                  unity and peace in the world.
                </li>
                
                <li>
                  To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, 
                  Bhagavad-gita and Srimad-Bhagavatam.
                </li>
                
                <li>
                  To bring the members of the Society together with each other and nearer to Krishna, the prime entity, 
                  thus developing the idea within the members, and humanity at large, that each soul is part and parcel 
                  of the quality of Godhead (Krishna).
                </li>
                
                <li>
                  To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, 
                  as revealed in the teachings of Lord Sri Chaitanya Mahaprabhu.
                </li>
                
                <li>
                  To erect for the members and for society at large a holy place of transcendental pastimes dedicated 
                  to the personality of Krishna.
                </li>
                
                <li>
                  To bring the members closer together for the purpose of teaching a simpler, more natural way of life.
                </li>
                
                <li>
                  With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, 
                  magazines, books and other writings.
                </li>
              </ol>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p>
                  To create a peaceful and unified world through the propagation of spiritual knowledge, cultural 
                  understanding, and the practice of devotional service to Lord Krishna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 