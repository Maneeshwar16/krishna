import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Home } from './components/Pages';

// About Pages
import AboutUs from './pages/about/AboutUs';
import AboutIskcon from './pages/about/AboutIskcon';
import FounderAcharya from './pages/about/FounderAcharya';
import OurPhilosophy from './pages/about/OurPhilosophy';
import OurMission from './pages/about/OurMission';

// Temple Pages
import Aarthi from './pages/temple/Aarthi';
import SaturdaySasthang from './pages/temple/SaturdaySasthang';
import SundayFeast from './pages/temple/SundayFeast';
import DailyDarshan from './pages/temple/DailyDarshan';

// Program Pages
import YouthSeminar from './pages/programs/YouthSeminar';
import Counselling from './pages/programs/Counselling';
import CongregationPreaching from './pages/programs/CongregationPreaching';
import BhagvadGitaCourses from './pages/programs/BhagvadGitaCourses';
import ChildrenPreaching from './pages/programs/ChildrenPreaching';
import CorporateProgrammes from './pages/programs/CorporateProgrammes';
import SocialWork from './pages/programs/SocialWork';
import OurPrograms from './pages/programs/OurPrograms';

// Donate Pages
import LifeMembership from './pages/donate/LifeMembership';
import NityaSeva from './pages/donate/NityaSeva';
import GauSeva from './pages/donate/GauSeva';
import FoodForLifeAnnadaan from './pages/donate/FoodForLifeAnnadaan';
import MahaKumbhMela from './pages/donate/MahaKumbhMela';
import GauraPurnima from './pages/donate/GauraPurnima';
import RamNavami from './pages/donate/RamNavami';

// Other Pages
import Shop from './pages/Shop';
import Samskara from './pages/Samskara';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-gray-900">
      <Navbar activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Home />
          </>
        } />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-iskcon" element={<AboutIskcon />} />
        <Route path="/founder-acharya" element={<FounderAcharya />} />
        <Route path="/our-philosophy" element={<OurPhilosophy />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/aarthi" element={<Aarthi />} />
        <Route path="/saturday-sasthang" element={<SaturdaySasthang />} />
        <Route path="/sunday-feast" element={<SundayFeast />} />
        <Route path="/daily-darshan" element={<DailyDarshan />} />
        <Route path="/youth-seminar" element={<YouthSeminar />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/congregation-preaching" element={<CongregationPreaching />} />
        <Route path="/bhagvad-gita-courses" element={<BhagvadGitaCourses />} />
        <Route path="/children-preaching" element={<ChildrenPreaching />} />
        <Route path="/corporate-programmes" element={<CorporateProgrammes />} />
        <Route path="/social-work" element={<SocialWork />} />
        <Route path="/our-programs" element={<OurPrograms />} />
        <Route path="/life-membership" element={<LifeMembership />} />
        <Route path="/nitya-seva" element={<NityaSeva />} />
        <Route path="/gau-seva" element={<GauSeva />} />
        <Route path="/food-for-life-annadaan" element={<FoodForLifeAnnadaan />} />
        <Route path="/maha-kumbh-mela" element={<MahaKumbhMela />} />
        <Route path="/gaura-purnima" element={<GauraPurnima />} />
        <Route path="/ram-navami" element={<RamNavami />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/samskara" element={<Samskara />} />
      </Routes>
    </div>
  );
}

export default App;
