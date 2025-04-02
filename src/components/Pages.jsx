import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardDemo from './ui/card-demo';
import { Link } from 'react-router-dom';
import HomeCards from './HomeCards';

gsap.registerPlugin(ScrollTrigger);

// Add CSS for animations
const cardAnimationStyles = `
  .card-reveal {
    opacity: 0;
    transform: scale(0.9) translateY(50px);
    transition: all 1s ease-in-out;
  }
  .card-reveal.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export function Home() {
  const mantrasRef = useRef(null);
  const hareKrishnaRef = useRef(null);
  const mantraBoxRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const scheduleRef = useRef(null);
  const malaZoomRef = useRef(null);
  const malaImageRef = useRef(null);
  const krishnaImageRef = useRef(null);
  const categoryCardsRef = useRef([]);
  const eventCardsRef = useRef([]);
  const scheduleCardsRef = useRef([]);
  const programCardsRef = useRef([]);

  // Reset refs on mount
  useEffect(() => {
    categoryCardsRef.current = [];
    eventCardsRef.current = [];
    scheduleCardsRef.current = [];
    programCardsRef.current = [];
  }, []);

  useEffect(() => {
    // Add styles to head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = cardAnimationStyles;
    document.head.appendChild(styleSheet);

    // Clean up
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Handle other animations after DOM is ready
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate if elements exist
      if (hareKrishnaRef.current) {
        // Set initial state to be visible
        gsap.set(hareKrishnaRef.current, { opacity: 1 });

        gsap.fromTo(hareKrishnaRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: mantrasRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
              onEnter: () => {
                gsap.to(hareKrishnaRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5
                });
              }
            }
          }
        );
      }

      if (mantraBoxRef.current) {
        // Set initial state to be visible
        gsap.set(mantraBoxRef.current, { opacity: 1 });

        gsap.fromTo(mantraBoxRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: mantrasRef.current,
              start: "top 40%",
              toggleActions: "play none none none",
              onEnter: () => {
                gsap.to(mantraBoxRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5
                });
              }
            }
          }
        );
      }

      // Category cards animation
      if (categoryCardsRef.current.length > 0) {
        categoryCardsRef.current.forEach((card, index) => {
          if (card) {
            // Set initial state to be visible
            gsap.set(card, { opacity: 1 });
            
            // Create animation
            gsap.fromTo(card,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: mantrasRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none",
                  onEnter: () => {
                    gsap.to(card, { opacity: 1, duration: 0.1 });
                  }
                }
              }
            );
          }
        });
      }

      // Events section animation
      if (eventsRef.current) {
        gsap.fromTo(eventsRef.current,
          { opacity: 1, y: 0 },  // Start fully visible
          {
            opacity: 1,
            y: 0,
            duration: 0,
            scrollTrigger: {
              trigger: eventsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Event cards stagger animation
      if (eventCardsRef.current.length > 0) {
        eventCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(card,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: eventsRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        });
      }

      // About section animation
      if (aboutRef.current) {
        gsap.fromTo(aboutRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Schedule section animation
      if (scheduleRef.current) {
        gsap.fromTo(scheduleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: scheduleRef.current,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Schedule cards stagger animation
      if (scheduleCardsRef.current.length > 0) {
        scheduleCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(card,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: scheduleRef.current,
                  start: "top 70%",
                  end: "bottom top",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        });
      }

      // Mala zoom effect
      if (malaZoomRef.current && malaImageRef.current && krishnaImageRef.current) {
        // Initial setup
        gsap.set(malaImageRef.current, { scale: 1 });
        gsap.set(krishnaImageRef.current, { opacity: 0 });

        // Create zoom animation
        gsap.to(malaImageRef.current, {
          scale: 2.5,
          scrollTrigger: {
            trigger: malaZoomRef.current,
            start: "top top",
            end: "+=100%",    // End after scrolling 100% of section's height
            scrub: true,
            pin: true,        // Pin the section while animating
            markers: false,   // Remove markers
            onUpdate: (self) => {
              // Fade in Krishna image as we scroll
              gsap.to(krishnaImageRef.current, {
                opacity: self.progress,
                duration: 0.1
              });
            }
          }
        });
      }

      // Program cards stagger animation
      if (programCardsRef.current.length > 0) {
        programCardsRef.current.forEach((card, index) => {
          if (card) {
            // Set initial state
            gsap.set(card, { opacity: 1, y: 0 });
            
            // Create a timeline for each card
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false  // Remove markers
              }
            });

            tl.fromTo(card,
              { opacity: 0, y: 100 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.2
              }
            );

            // Ensure card stays visible
            ScrollTrigger.create({
              trigger: card,
              start: "top 80%",
              markers: false,  // Remove markers
              onEnter: () => {
                gsap.to(card, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5
                });
              }
            });
          }
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this runs once on mount

  const addToCategoryRefs = (el) => {
    if (el && !categoryCardsRef.current.includes(el)) {
      categoryCardsRef.current.push(el);
    }
  };

  // Function to add event cards to ref array
  const addToEventRefs = (el) => {
    if (el && !eventCardsRef.current.includes(el)) {
      eventCardsRef.current.push(el);
    }
  };

  // Function to add schedule cards to ref array
  const addToScheduleRefs = (el) => {
    if (el && !scheduleCardsRef.current.includes(el)) {
      scheduleCardsRef.current.push(el);
    }
  };

  // Function to add program cards to ref array
  const addToProgramRefs = (el) => {
    if (el && !programCardsRef.current.includes(el)) {
      programCardsRef.current.push(el);
    }
  };

  return (
    <div className="relative w-full">
      {/* Mantra Section */}
      <section ref={mantrasRef} className="relative min-h-[100dvh] py-10 md:py-20">
        <div className="bg-parallax absolute inset-0" style={{ 
          backgroundImage: "url('/krishna-radha.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%"
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 ref={hareKrishnaRef} className="text-5xl font-bold mb-12 text-white tracking-wider">
              HARE KRISHNA 
            </h1>
            
            <div ref={mantraBoxRef} className="mb-16 p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20">
              <h2 className="text-2xl font-semibold mb-4 text-white">अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।<br/>
              तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥</h2>
              <p className="text-xl mb-4 text-white/90 italic">
                ananyāś cintayanto māṁ ye janāḥ paryupāsate<br/>
                teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham
              </p>
              <p className="text-lg text-white/80">
                This verse highlights Lord Krishna's assurance to His devotees that if they worship Him with unwavering faith and devotion, 
                He will personally take care of their needs—both material (yoga: acquisition of needs) and spiritual (kṣema: preservation of what is attained).
              </p>
              <p className="text-sm text-white/60 mt-4">- Bhagavad Gita, Chapter 9, Verse 22</p>
            </div>

            {/* Category Cards Container with Background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {[
                  {
                    title: "Spiritual Courses",
                    description: "Explore our comprehensive spiritual courses including Bhagavad Gita classes, Krishna Consciousness workshops, and more.",
                    image: "/krishna-radha.jpg",
                    hoverImage: "/SriRam-Navami.jpg",
                    link: "/bhagvad-gita-courses"
                  },
                  {
                    title: "Festivals & Celebrations",
                    description: "Join us in celebrating major Vaishnava festivals, including Janmashtami, Gaura Purnima, and other auspicious occasions.",
                    image: "/SriRam-Navami.jpg",
                    hoverImage: "/krishna-radha.jpg",
                    link: "/gaura-purnima"
                  },
                  {
                    title: "Sacred Yatras",
                    description: "Participate in spiritual pilgrimages to holy places and experience the divine presence of Lord Krishna.",
                    image: "/krishna-radha.jpg",
                    hoverImage: "/SriRam-Navami.jpg",
                    link: "/maha-kumbh-mela"
                  }
                ].map((card, index) => (
                  <CardDemo
                    key={index}
                    ref={addToCategoryRefs}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    hoverImage={card.hoverImage}
                    link={card.link}
                  />
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="relative min-h-[100dvh] py-10 md:py-16">
        <div className="bg-parallax absolute inset-0" style={{ 
          backgroundImage: "url('/krishna-radha.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%"
        }}></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sri Rama Navami Mahostavam",
                description: "Join us for the grand celebration of Lord Rama's appearance day",
                date: "06-04-2025",
                image: "SriRam-Navami.jpg",
                link: "/ram-navami"
              },
              {
                title: "Sunday Feast Program",
                description: "Weekly spiritual gathering with kirtan, lecture, and prasadam.",
                date: "Every Sunday",
                image: "SriRam-Navami.jpg",
                link: "/sunday-feast"
              },
              {
                title: "Bhagavad Gita Course",
                description: "Learn the timeless wisdom of Bhagavad Gita in our structured course.",
                date: "Weekends",
                image: "SriRam-Navami.jpg",
                link: "/bhagvad-gita-courses"
              }
            ].map((event, index) => (
              <Link 
                key={index}
                to={event.link}
                ref={addToEventRefs}
                className="block group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/20 h-full 
                  transform transition-all duration-300 
                  group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:bg-white/20
                  active:scale-95 active:shadow-inner">
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-orange-200">{event.title}</h3>
                    <p className="text-white/80 mb-4 transition-colors duration-300 group-hover:text-white">{event.description}</p>
                    <div className="flex items-center text-white/70 transition-colors duration-300 group-hover:text-orange-200">
                      <span className="mr-2">📅</span>
                      {event.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mala Zoom Section */}
      <section ref={malaZoomRef} className="relative min-h-[200dvh] overflow-hidden bg-black">
        {/* First viewport height - Mala zoom */}
        <div className="h-[100dvh] sticky top-0 flex items-center justify-center">
          {/* Krishna image that will be revealed */}
          <div 
            ref={krishnaImageRef} 
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{ 
              backgroundImage: "url('/krishna-radha.jpg')",
              backgroundPosition: "center 40%",
              opacity: 0
            }}
          ></div>
          
          {/* Mala frame that will zoom */}
          <div 
            ref={malaImageRef}
            className="relative w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/malawithoutbg.png')",
              transformOrigin: "center center"
            }}
          ></div>
        </div>

        {/* Second viewport height - Program Cards */}
        <div className="min-h-[100dvh] relative">
          <div className="absolute inset-0">
            <div 
              className="bg-parallax absolute inset-0"
              style={{ 
                backgroundImage: "url('/krishna-radha.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 40%"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-800/70 backdrop-blur-sm"></div>
          </div>
          
          <div className="container mx-auto px-4 py-32 relative">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Engage, Serve & Transform with ISKCON
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Daily Darshan",
                  description: "Experience the divine presence through our daily temple darshan programs.",
                  icon: "🙏",
                  link: "/daily-darshan"
                },
                {
                  title: "Life Membership",
                  description: "Join our spiritual family and support the temple's divine mission.",
                  icon: "🌟",
                  link: "/life-membership"
                },
                {
                  title: "Youth Programs",
                  description: "Engaging activities and spiritual guidance for young devotees.",
                  icon: "👥",
                  link: "/youth-seminar"
                },
                {
                  title: "Our Programs",
                  description: "Explore our various spiritual and cultural programs.",
                  icon: "📅",
                  link: "/our-programs"
                },
                {
                  title: "Become Nitya Sevak",
                  description: "Serve the divine through our daily service programs.",
                  icon: "🌺",
                  link: "/nitya-seva"
                }
              ].map((program, index) => (
                <Link 
                  key={index}
                  to={program.link}
                  className="block group relative overflow-hidden"
                  ref={addToProgramRefs}
                >
                  <div 
                    className="relative bg-black/40 backdrop-blur-md rounded-lg p-8 border border-white/20
                      transform transition-all duration-300 h-[300px] flex flex-col justify-center
                      group-hover:-translate-y-2 group-hover:shadow-2xl
                      active:scale-95"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ 
                        backgroundImage: "url('/kirtan.jpg')",
                        maskImage: "radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), white, transparent)",
                        WebkitMaskImage: "radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), white, transparent)"
                      }}
                    ></div>
                    <div className="relative z-20">
                      <span className="text-5xl mb-6 block">{program.icon}</span>
                      <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-orange-200">
                        {program.title}
                      </h3>
                      <p className="text-lg text-white/80 group-hover:text-white">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative min-h-screen py-20">
        <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">About ISKCON Vijayawada</h2>
            <p className="text-lg mb-6 text-gray-700">
              ISKCON Vijayawada, established in 1984, is a spiritual sanctuary dedicated to spreading the message of 
              Bhagavad Gita and Krishna Consciousness. The temple serves as a cultural center promoting Vedic 
              knowledge and spiritual enlightenment.
            </p>
            <p className="text-lg text-gray-700">
              Located in the heart of Vijayawada, the temple complex features beautiful deities of 
              Sri Sri Radha Krishna, regular spiritual programs, and various community services.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section ref={scheduleRef} className="relative min-h-screen py-20">
        <div className="bg-parallax absolute inset-0" style={{ backgroundImage: "url('/krishna-radha.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Daily Temple Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Morning Program",
                  schedule: [
                    "4:30 AM - Mangala Arati",
                    "5:00 AM - Tulasi Arati",
                    "7:30 AM - Darshan Arati",
                    "8:00 AM - Sringar Arati"
                  ]
                },
                {
                  title: "Evening Program",
                  schedule: [
                    "4:30 PM - Dhoop Arati",
                    "7:00 PM - Sandhya Arati",
                    "8:30 PM - Shayan Arati"
                  ]
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  ref={addToScheduleRefs}
                  className="bg-white/10 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                  <ul className="space-y-2">
                    {program.schedule.map((time, idx) => (
                      <li key={idx}>{time}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <HomeCards />
      </div>
    </div>
  );
}

export function AboutIskcon() { return <div>About ISKCON Page</div> }
export function FounderAcharya() { return <div>Founder Acharya Page</div> }
export function OurPhilosophy() { return <div>Our Philosophy Page</div> }
export function OurMission() { return <div>Our Mission Page</div> }
export function Aarthi() { return <div>Aarthi Page</div> }
export function SaturdaySasthang() { return <div>Saturday Sasthang Page</div> }
export function SundayFeast() { return <div>Sunday Feast Page</div> }
export function YouthSeminar() { return <div>Youth Seminar Page</div> }
export function Counselling() { return <div>Counselling Page</div> }
export function CongregationPreaching() { return <div>Congregation Preaching Page</div> }
export function BhagvadGitaCourses() { return <div>Bhagvad Gita Courses Page</div> }
export function ChildrenPreaching() { return <div>Children Preaching Page</div> }
export function CorporateProgrammes() { return <div>Corporate Programmes Page</div> }
export function SocialWork() { return <div>Social Work Page</div> }
export function LifeMembership() { return <div>Life Membership Page</div> }
export function NityaSeva() { return <div>Nitya Seva Page</div> }
export function GauSeva() { return <div>Gau Seva Page</div> }
export function FoodForLifeAnnadaan() { return <div>Food For Life Annadaan Page</div> }
export function MahaKumbhMela() { return <div>Maha Kumbh Mela Page</div> }
export function GauraPurnima() { return <div>Gaura Purnima Page</div> }
export function RamNavami() { return <div>Ram Navami Page</div> }
export function Shop() { return <div>Shop Page</div> }
export function Samskara() { return <div>Samskara Page</div> }
export function BhaktiVriksh() { return <div>Bhakti Vriksh Page</div> }
export function BhaktiSastri() { return <div>Bhakti Sastri Page</div> }
export function GitaForYou() { return <div>Gita For You Page</div> }
export function GopalaFunSchool() { return <div>Gopala Fun School Page</div> } 