import React from 'react';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';

export default function FounderAcharya() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Founder Acharya</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="space-y-4">
                  <CardContainer className="inter-var">
                    <CardBody className="relative group/card w-auto h-auto">
                      <CardItem
                        translateZ="100"
                        className="w-full"
                      >
                        <div className="relative w-full overflow-hidden rounded-xl">
                          <img 
                            src="/Prabhupada.jpg" 
                            alt="Srila Prabhupada" 
                            className="w-full h-auto object-cover rounded-lg shadow-xl group-hover/card:shadow-2xl group-hover/card:shadow-orange-500/[0.1] transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover/card:to-black/80 transition-all duration-500"></div>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  
                  <div className="text-center space-y-1">
                    <h3 className="font-medium text-base text-white">His Divine Grace</h3>
                    <h4 className="font-bold text-lg text-white">A.C. Bhaktivedanta Swami Prabhupada</h4>
                    <div className="text-white/80 text-sm italic">Founder-Acharya of the International Society for Krishna Consciousness</div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6 text-white/90">
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                </h2>
                
                <p>
                  Srila Prabhupada was born Abhay Charan De on September 1, 1896, in Calcutta. 
                  In 1922, he first met his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, 
                  who requested him to spread the message of Krishna consciousness in English.
                </p>

                <p>
                  At the age of 69, he traveled to New York City aboard a cargo ship, carrying only a few rupees 
                  and his translations of sacred Sanskrit texts. By the time he passed away in 1977, he had guided 
                  ISKCON into becoming a worldwide confederation of hundreds of temples, ashrams, schools, and cultural centers.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">His Contributions:</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Translated over 80 volumes of spiritual classics</li>
                  <li>Established 108 Krishna temples worldwide</li>
                  <li>Initiated thousands of disciples</li>
                  <li>Introduced Krishna consciousness to Western world</li>
                  <li>Started the Food for Life program</li>
                  <li>Founded the Bhaktivedanta Book Trust</li>
                </ul>

                <p className="mt-8 italic">
                  "The spiritual master opens our eyes with the torch of knowledge when we are in the darkness of ignorance."
                  - Srila Prabhupada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 