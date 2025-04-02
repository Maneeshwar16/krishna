import React from 'react';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Youth Preaching",
    image: "/youth-preaching.jpg",
    description: "Engaging youth in spiritual practices through seminars and counseling",
    link: "/youth-seminar"
  },
  {
    title: "Bhagvad Gita Courses",
    image: "/gita-courses.jpg",
    description: "In-depth study of Bhagvad Gita As It Is",
    link: "/bhagvad-gita-courses"
  },
  {
    title: "Children Preaching",
    image: "/children-preaching.jpg",
    description: "Fun and interactive spiritual education for children",
    link: "/children-preaching"
  },
  {
    title: "Corporate Programs",
    image: "/corporate-programs.jpg",
    description: "Spiritual wisdom for professional excellence",
    link: "/corporate-programmes"
  }
];

export default function OurPrograms() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background */}
      <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Our Programs</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Link to={program.link} key={index}>
                  <CardContainer className="inter-var">
                    <CardBody className="relative group/card w-auto h-auto">
                      <CardItem translateZ="100" className="w-full">
                        <div className="relative w-full overflow-hidden rounded-xl">
                          <img 
                            src={program.image} 
                            alt={program.title} 
                            className="w-full h-64 object-cover rounded-lg shadow-xl group-hover/card:shadow-2xl group-hover/card:shadow-orange-500/[0.1] transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover/card:to-black/80 transition-all duration-500"></div>
                        </div>
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="absolute inset-0 flex flex-col justify-end p-4"
                      >
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        <p className="text-white/80 text-sm mt-2">{program.description}</p>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </Link>
              ))}
            </div>

            <div className="text-white/90 text-center mt-8">
              <p className="italic">
                "Spiritual life means practical application of the teachings of scriptures in one's life."
              </p>
              <p className="mt-4">
                Join our various programs and enrich your spiritual journey with like-minded devotees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 