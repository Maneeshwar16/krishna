import React from 'react';

export default function AboutUs() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl font-bold text-white text-center mb-12">About Us</h1>

        {/* Founder Acharya Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white text-center mb-4">
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            </h3>
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="/Prabhupada.jpg" 
                alt="Srila Prabhupada" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-6 text-white/90">
            <h2 className="text-3xl font-semibold text-white">His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</h2>
            
            <p>
              Srila Prabhupada was born in 1896 in Calcutta. He first met his spiritual master, 
              Srila Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922. Bhaktisiddhanta Sarasvati, a prominent devotional scholar and the founder of sixty-four branches of Gaudiya Mathas, liked this educated young man and convinced him to dedicate his life to teaching Vedic knowledge in the Western world.
            </p>

            <p>
              At the age of 69, Srila Prabhupada traveled to New York City aboard a cargo ship. The journey was treacherous, and he suffered two heart attacks aboard. He had only a few rupees in his possession. In the years that followed, he would go on to found the International Society for Krishna Consciousness (ISKCON), which has since grown into a worldwide confederation of more than 400 centers, including 60 farm communities, some dozen schools and a wide variety of community projects.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">His Contributions</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Translated and authored over 80 volumes of books</li>
              <li>Established 108 Krishna temples worldwide</li>
              <li>Initiated 5,000 disciples</li>
              <li>Introduced Krishna prasadam distribution</li>
              <li>Started the Ratha-yatra festivals in major cities</li>
              <li>Founded the Bhaktivedanta Book Trust</li>
            </ul>

            <div className="mt-8 italic">
              "The spiritual master opens our eyes with the torch of knowledge. He is eternally engaged in the service of the Lord."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 