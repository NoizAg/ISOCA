import HeroSection from '../src/components/sections/HeroSection.jsx';
// import FoodSection from '../src/components/sections/FoodSection.jsx';
import WorkshopsSection from '../src/components/sections/WorkshopsSection.jsx';
import BandsSection from '../src/components/sections/BandsSection.jsx';
import ExperienceSection from '../src/components/sections/ExperienceSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BandsSection />
      <WorkshopsSection />
      {/* <FoodSection /> */}
      <ExperienceSection />
    </>
  );
}