import React from 'react';

export default function Samskara() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Samskara</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="space-y-6 text-white/90">
              <h2 className="text-2xl font-semibold mb-6 text-white">Vedic Life Ceremonies</h2>
              
              <div className="p-6 bg-white/5 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Types of Samskaras</h3>
                <ul className="space-y-3">
                  <li>Garbhadhana (Conception)</li>
                  <li>Pumsavana (Fetal Protection)</li>
                  <li>Simantonnayana (Hair Parting)</li>
                  <li>Jatakarma (Birth)</li>
                  <li>Namakarana (Naming)</li>
                  <li>Nishkramana (First Outing)</li>
                  <li>Annaprashana (First Food)</li>
                  <li>Chudakarma (Hair Cutting)</li>
                  <li>Karnavedha (Ear Piercing)</li>
                  <li>Vidyarambha (Learning)</li>
                  <li>Upanayana (Sacred Thread)</li>
                  <li>Vedarambha (Vedic Studies)</li>
                  <li>Keshanta (Shaving)</li>
                  <li>Samavartana (Graduation)</li>
                  <li>Vivaha (Marriage)</li>
                  <li>Antyeshti (Last Rites)</li>
                </ul>
              </div>

              <p>
                Samskaras are sacred ceremonies that mark important milestones in a person's life. 
                These rituals help purify the mind and body, and connect us with our spiritual heritage.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>
                  To schedule any of these ceremonies or for more information, please contact our temple office. 
                  We are here to help you perform these sacred rituals according to Vedic traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 