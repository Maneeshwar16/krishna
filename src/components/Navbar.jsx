import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activeDropdown, setActiveDropdown }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex flex-nowrap overflow-x-auto justify-center md:justify-between items-center gap-4 md:gap-6 text-lg font-medium text-white whitespace-nowrap">
          <NavItem title="HOME" href="/" />
          
          {/* ABOUT Dropdown */}
          <NavDropdown 
            title="ABOUT" 
            activeDropdown={activeDropdown} 
            setActiveDropdown={setActiveDropdown}
          >
            <DropdownLink href="/about-iskcon">ABOUT ISKCON</DropdownLink>
            <DropdownLink href="/founder-acharya">FOUNDER ACHARYA</DropdownLink>
            <DropdownLink href="/our-philosophy">OUR PHILOSOPHY</DropdownLink>
            <DropdownLink href="/our-mission">OUR MISSION</DropdownLink>
          </NavDropdown>

          {/* TEMPLE Dropdown */}
          <NavDropdown 
            title="TEMPLE" 
            activeDropdown={activeDropdown} 
            setActiveDropdown={setActiveDropdown}
          >
            <DropdownLink href="/aarthi">Aarthi</DropdownLink>
            <DropdownLink href="/saturday-sasthang">Saturday Sasthang</DropdownLink>
            <DropdownLink href="/sunday-feast">Sunday Feast</DropdownLink>
          </NavDropdown>

          {/* OUR PROGRAM Dropdown */}
          <NavDropdown 
            title="OUR PROGRAM" 
            activeDropdown={activeDropdown} 
            setActiveDropdown={setActiveDropdown}
          >
            <DropdownSubmenu title="YOUTH PREACHING">
              <DropdownLink href="/youth-seminar">YOUTH SEMINAR</DropdownLink>
              <DropdownLink href="/counselling">COUNSELLING</DropdownLink>
            </DropdownSubmenu>
            <DropdownSubmenu title="CONGREGATION PREACHING">
              <DropdownLink href="/bhakti-vriksh">BHAKTI VRIKSH</DropdownLink>
              <DropdownLink href="/bhakti-sastri">BHAKTI SASTRI</DropdownLink>
            </DropdownSubmenu>
            <DropdownSubmenu title="BHAGVAD GITA COURSES">
              <DropdownLink href="/gita-for-you">GITA FOR YOU</DropdownLink>
            </DropdownSubmenu>
            <DropdownSubmenu title="CHILDREN PREACHING">
              <DropdownLink href="/gopala-fun-school">GOPALA FUN SCHOOL</DropdownLink>
            </DropdownSubmenu>
            <DropdownLink href="/corporate-programmes">CORPORATE PROGRAMMES</DropdownLink>
            <DropdownLink href="/social-work">SOCIAL WORK</DropdownLink>
          </NavDropdown>

          {/* DONATE Dropdown */}
          <NavDropdown 
            title="DONATE" 
            activeDropdown={activeDropdown} 
            setActiveDropdown={setActiveDropdown}
          >
            <DropdownLink href="/life-membership">LIFE MEMBERSHIP</DropdownLink>
            <DropdownLink href="/nitya-seva">NITYA SEVA</DropdownLink>
            <DropdownLink href="/gau-seva">GAU SEVA</DropdownLink>
            <DropdownLink href="/food-for-life-annadaan">FOOD FOR LIFE ANNADAAN</DropdownLink>
            <DropdownLink href="/maha-kumbh-mela">MAHA KUMBH MELA</DropdownLink>
            <DropdownLink href="/gaura-purnima">GAURA PURNIMA</DropdownLink>
            <DropdownLink href="/ram-navami">RAM NAVAMI</DropdownLink>
          </NavDropdown>

          <NavItem title="SHOP" href="/shop" />
          <NavItem title="SAMSKARA" href="/samskara" />
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ title, href }) {
  return (
    <li>
      <Link to={href} className="hover:text-yellow-300 transition-colors">
        {title}
      </Link>
    </li>
  );
}

function NavDropdown({ title, activeDropdown, setActiveDropdown, children }) {
  const isActive = activeDropdown === title;
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setActiveDropdown(null), 200);
    setTimeoutId(id);
  };

  return (
    <li 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="hover:text-yellow-300 transition-colors flex items-center gap-1"
        onClick={() => setActiveDropdown(isActive ? null : title)}
      >
        {title} 
        <span className="text-xs">▼</span>
      </button>
      {isActive && (
        <div 
          className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </li>
  );
}

function DropdownLink({ href, children }) {
  return (
    <Link 
      to={href} 
      className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
    >
      {children}
    </Link>
  );
}

function DropdownSubmenu({ title, children }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsSubmenuOpen(false), 200);
    setTimeoutId(id);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors flex justify-between items-center"
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      >
        {title}
        <span className="text-xs">→</span>
      </button>
      {isSubmenuOpen && (
        <div 
          className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
} 