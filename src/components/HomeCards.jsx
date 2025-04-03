import React from 'react';
import { Link } from 'react-router-dom';
import { WobbleCard } from './ui/wobble-card';

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 pt-[300px] md:pt-40">
      {cards.map((card, index) => (
        <Link to={card.link} key={index}>
          <WobbleCard
            containerClassName="bg-black/40 backdrop-blur-sm w-full rounded-xl border border-white/[0.1] transition-all duration-500 hover:bg-black/50"
          >
            <div className="relative z-20 p-6">
              <div className="text-3xl">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          </WobbleCard>
        </Link>
      ))}
    </div>
  );
} 