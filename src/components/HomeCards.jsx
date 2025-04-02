import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const cards = [
  {
    icon: "🙏",
    title: "Daily Darshan",
    description: "Experience the divine presence through our daily temple darshan programs.",
    link: "/daily-darshan"
  },
  {
    icon: "⭐",
    title: "Life Membership",
    description: "Join our spiritual family and support the temple's divine mission.",
    link: "/life-membership"
  },
  {
    icon: "👥",
    title: "Youth Programs",
    description: "Engaging activities and spiritual guidance for young devotees.",
    link: "/youth-seminar"
  },
  {
    icon: "📅",
    title: "Our Programs",
    description: "Explore our various spiritual and cultural programs.",
    link: "/our-programs"
  }
];

export default function HomeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {cards.map((card, index) => (
        <Link to={card.link} key={index}>
          <CardContainer>
            <CardBody className="relative group/card bg-black/[0.6] hover:bg-black/[0.8] w-full h-[200px] rounded-xl p-6 border border-white/[0.1] transition-all duration-500">
              <CardItem
                translateZ="50"
                className="text-3xl"
              >
                {card.icon}
              </CardItem>
              <CardItem
                as="h3"
                translateZ="60"
                className="text-2xl font-bold text-white mt-4"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="80"
                className="text-white/70 text-sm mt-2 leading-relaxed"
              >
                {card.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      ))}
    </div>
  );
} 