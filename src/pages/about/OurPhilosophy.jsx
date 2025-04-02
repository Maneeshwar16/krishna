import React from 'react';

export default function OurPhilosophy() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Our Philosophy</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">The Science of Self-Realization</h2>
              
              <p>
                The philosophy of Krishna consciousness, also known as Gaudiya Vaishnavism, is based on the ancient 
                Vedic scriptures of India, particularly the Bhagavad-gita and Srimad-Bhagavatam.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Key Philosophical Points:</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>We are eternal spiritual beings (atma) distinct from our temporary material bodies</li>
                <li>Krishna is the Supreme Personality of Godhead, the source of all existence</li>
                <li>The purpose of life is to reawaken our dormant love for Krishna</li>
                <li>This awakening is achieved through the practice of bhakti-yoga (devotional service)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">The Process of Bhakti:</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Chanting the Hare Krishna maha-mantra</li>
                <li>Studying Vedic scriptures</li>
                <li>Associating with devotees</li>
                <li>Offering food to Krishna (prasadam)</li>
                <li>Engaging in devotional service</li>
              </ul>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">The Hare Krishna Maha-mantra:</h4>
                <p className="text-center text-xl italic">
                  Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare<br/>
                  Hare Rama, Hare Rama, Rama Rama, Hare Hare
                </p>
              </div>

              <p className="mt-8">
                This mantra is a transcendental sound vibration that cleanses the heart of all misgivings 
                and connects us with Krishna, the Supreme Personality of Godhead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 