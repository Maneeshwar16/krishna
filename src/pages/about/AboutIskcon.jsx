import React from 'react';

export default function AboutIskcon() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">About ISKCON</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">The International Society for Krishna Consciousness (ISKCON)</h2>
            
            <div className="space-y-6 text-white/90">
              <p>
                ISKCON, also known as the Hare Krishna movement, was founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. 
                It belongs to the Gaudiya-Vaishnava sampradaya, a monotheistic tradition within Vedic culture.
              </p>
              
              <p>
                Our mission is to promote the well-being of human society by teaching the science of Krishna consciousness 
                according to Bhagavad-gita and other ancient scriptures.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Core Principles:</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Spreading the practice of sankirtana (congregational chanting of the holy names of God)</li>
                <li>Teaching the science of Krishna consciousness based on Vedic scriptures</li>
                <li>Bringing members closer to Krishna, the Supreme Personality of Godhead</li>
                <li>Distributing spiritual food (prasadam) worldwide</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our Activities:</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Daily temple worship and spiritual programs</li>
                <li>Educational programs and courses on Vedic literature</li>
                <li>Food for Life - distributing sanctified vegetarian meals</li>
                <li>Cultural presentations and festivals</li>
                <li>Publishing and distributing spiritual literature</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 