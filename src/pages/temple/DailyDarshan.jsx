import React from 'react';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';

export default function DailyDarshan() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Daily Darshan</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Morning Darshan */}
              <div>
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto h-auto">
                    <CardItem translateZ="100" className="w-full">
                      <div className="relative w-full overflow-hidden rounded-xl">
                        <img 
                          src="/morning-darshan.jpg" 
                          alt="Morning Darshan" 
                          className="w-full h-auto object-cover rounded-lg shadow-xl group-hover/card:shadow-2xl group-hover/card:shadow-orange-500/[0.1] transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover/card:to-black/80 transition-all duration-500"></div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-white">Morning Darshan</h3>
                  <div className="text-white/80 mt-2">
                    <p>4:30 AM - Mangala Arati</p>
                    <p>7:15 AM - Shringar Arati</p>
                    <p>8:30 AM - Guru Puja</p>
                  </div>
                </div>
              </div>

              {/* Evening Darshan */}
              <div>
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto h-auto">
                    <CardItem translateZ="100" className="w-full">
                      <div className="relative w-full overflow-hidden rounded-xl">
                        <img 
                          src="/evening-darshan.jpg" 
                          alt="Evening Darshan" 
                          className="w-full h-auto object-cover rounded-lg shadow-xl group-hover/card:shadow-2xl group-hover/card:shadow-orange-500/[0.1] transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover/card:to-black/80 transition-all duration-500"></div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-white">Evening Darshan</h3>
                  <div className="text-white/80 mt-2">
                    <p>4:30 PM - Dhoop Arati</p>
                    <p>7:00 PM - Sandhya Arati</p>
                    <p>8:30 PM - Shayan Arati</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white/90 text-center mt-8">
              <p className="italic">
                "The temple is the house of the Lord, and it is the duty of the householder to visit the temple and offer respects to the Deity."
              </p>
              <p className="mt-4">
                Please join us for daily darshan and receive the divine blessings of Sri Sri Radha Krishna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 