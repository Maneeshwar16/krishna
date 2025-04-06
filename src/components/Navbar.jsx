import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activeDropdown, setActiveDropdown }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-6">
        {/* Hamburger for mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-3xl focus:outline-none mr-4"
          >
            ☰
          </button>
          <div className="text-white text-xl font-semibold">ISKCON</div>
        </div>

        {/* Mobile menu */}
        <div className={`${mobileOpen ? "block" : "hidden"} md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg`}>
          <ul className="flex flex-col space-y-4 text-lg font-medium text-white">
            <NavItem title="HOME" href="/" onClick={() => setMobileOpen(false)} />

            <NavDropdown
              title="ABOUT"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onClose={() => setMobileOpen(false)}
            >
              <DropdownLink href="/about-iskcon" onClick={() => setMobileOpen(false)}>ABOUT ISKCON</DropdownLink>
              <DropdownLink href="/founder-acharya" onClick={() => setMobileOpen(false)}>FOUNDER ACHARYA</DropdownLink>
              <DropdownLink href="/our-philosophy" onClick={() => setMobileOpen(false)}>OUR PHILOSOPHY</DropdownLink>
              <DropdownLink href="/our-mission" onClick={() => setMobileOpen(false)}>OUR MISSION</DropdownLink>
            </NavDropdown>

            <NavDropdown
              title="TEMPLE"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onClose={() => setMobileOpen(false)}
            >
              <DropdownLink href="/aarthi" onClick={() => setMobileOpen(false)}>Aarthi</DropdownLink>
              <DropdownLink href="/saturday-sasthang" onClick={() => setMobileOpen(false)}>Saturday Sasthang</DropdownLink>
              <DropdownLink href="/sunday-feast" onClick={() => setMobileOpen(false)}>Sunday Feast</DropdownLink>
            </NavDropdown>

            <NavDropdown
              title="OUR PROGRAM"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onClose={() => setMobileOpen(false)}
            >
              <DropdownSubmenu title="YOUTH PREACHING" onClose={() => setMobileOpen(false)}>
                <DropdownLink href="/youth-seminar" onClick={() => setMobileOpen(false)}>YOUTH SEMINAR</DropdownLink>
                <DropdownLink href="/counselling" onClick={() => setMobileOpen(false)}>COUNSELLING</DropdownLink>
              </DropdownSubmenu>
              <DropdownSubmenu title="CONGREGATION PREACHING" onClose={() => setMobileOpen(false)}>
                <DropdownLink href="/bhakti-vriksh" onClick={() => setMobileOpen(false)}>BHAKTI VRIKSH</DropdownLink>
                <DropdownLink href="/bhakti-sastri" onClick={() => setMobileOpen(false)}>BHAKTI SASTRI</DropdownLink>
              </DropdownSubmenu>
              <DropdownSubmenu title="BHAGVAD GITA COURSES" onClose={() => setMobileOpen(false)}>
                <DropdownLink href="/gita-for-you" onClick={() => setMobileOpen(false)}>GITA FOR YOU</DropdownLink>
              </DropdownSubmenu>
              <DropdownSubmenu title="CHILDREN PREACHING" onClose={() => setMobileOpen(false)}>
                <DropdownLink href="/gopala-fun-school" onClick={() => setMobileOpen(false)}>GOPALA FUN SCHOOL</DropdownLink>
              </DropdownSubmenu>
              <DropdownLink href="/corporate-programmes" onClick={() => setMobileOpen(false)}>CORPORATE PROGRAMMES</DropdownLink>
              <DropdownLink href="/social-work" onClick={() => setMobileOpen(false)}>SOCIAL WORK</DropdownLink>
            </NavDropdown>

            <NavDropdown
              title="DONATE"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onClose={() => setMobileOpen(false)}
            >
              <DropdownLink href="/life-membership" onClick={() => setMobileOpen(false)}>LIFE MEMBERSHIP</DropdownLink>
              <DropdownLink href="/nitya-seva" onClick={() => setMobileOpen(false)}>NITYA SEVA</DropdownLink>
              <DropdownLink href="/gau-seva" onClick={() => setMobileOpen(false)}>GAU SEVA</DropdownLink>
              <DropdownLink href="/food-for-life-annadaan" onClick={() => setMobileOpen(false)}>FOOD FOR LIFE ANNADAAN</DropdownLink>
              <DropdownLink href="/maha-kumbh-mela" onClick={() => setMobileOpen(false)}>MAHA KUMBH MELA</DropdownLink>
              <DropdownLink href="/gaura-purnima" onClick={() => setMobileOpen(false)}>GAURA PURNIMA</DropdownLink>
              <DropdownLink href="/ram-navami" onClick={() => setMobileOpen(false)}>RAM NAVAMI</DropdownLink>
            </NavDropdown>

            <NavItem title="SHOP" href="/shop" onClick={() => setMobileOpen(false)} />
            <NavItem title="SAMSKARA" href="/samskara" onClick={() => setMobileOpen(false)} />
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:flex-row md:space-x-6 md:space-y-0 justify-between items-start md:items-center text-lg font-medium text-white mt-4 md:mt-0">
          <NavItem title="HOME" href="/" />

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

          <NavDropdown
            title="TEMPLE"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <DropdownLink href="/aarthi">Aarthi</DropdownLink>
            <DropdownLink href="/saturday-sasthang">Saturday Sasthang</DropdownLink>
            <DropdownLink href="/sunday-feast">Sunday Feast</DropdownLink>
          </NavDropdown>

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

function NavItem({ title, href, onClick }) {
  return (
    <li>
      <Link to={href} className="hover:text-yellow-300 transition-colors" onClick={onClick}>
        {title}
      </Link>
    </li>
  );
}

function NavDropdown({ title, activeDropdown, setActiveDropdown, children, onClose }) {
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
        onClick={() => {
          setActiveDropdown(isActive ? null : title);
          if (onClose) onClose();
        }}
      >
        {title}
        <span className="text-xs">▼</span>
      </button>
      {isActive && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </li>
  );
}

function DropdownLink({ href, children, onClick }) {
  return (
    <Link
      to={href}
      className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function DropdownSubmenu({ title, children, onClose }) {
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
        onClick={() => {
          setIsSubmenuOpen(!isSubmenuOpen);
          if (onClose) onClose();
        }}
      >
        {title}
        <span className="text-xs">→</span>
      </button>
      {isSubmenuOpen && (
        <div
          className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}
