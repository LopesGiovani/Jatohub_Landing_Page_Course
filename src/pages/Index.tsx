import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import WhatYouLearn from "@/components/WhatYouLearn";
import CourseStructure from "@/components/CourseStructure";
import Bonus from "@/components/Bonus";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ForWho />
      <WhatYouLearn />
      <CourseStructure />
      <Bonus />
      <Pricing />
      <Guarantee />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
