import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import Problem from "@/components/sections/Problem";
import FundingOpportunities from "@/components/sections/FundingOpportunities";
import OurApproach from "@/components/sections/OurApproach";
import Services from "@/components/sections/Services";
import SpecialPackages from "@/components/sections/SpecialPackages";
import ForWhom from "@/components/sections/ForWhom";
import Results from "@/components/sections/Results";
import WhyUs from "@/components/sections/WhyUs";
import CTAForm from "@/components/sections/CTAForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyNow />
        <Problem />
        <FundingOpportunities />
        <OurApproach />
        <Services />
        <SpecialPackages />
        <ForWhom />
        <Results />
        <WhyUs />
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
