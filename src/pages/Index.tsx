import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationAndMore from "@/components/EducationAndMore";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <EducationAndMore />
      <Footer />
    </div>
  );
};

export default Index;
