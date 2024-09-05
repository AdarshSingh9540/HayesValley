import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SiliconValleyFellowship from "@/components/SiliconValley";
import SiliconValleyFellows from "@/components/SiliconValleyFellow";
import { InfiniteMovingCardsDemo } from "@/components/Testimonial";
import WhatToExpect from "@/components/WhatToExpect";


export default function Home() {
  return (
       <>
       <HeroSection/>
       <SiliconValleyFellowship/>
       <SiliconValleyFellows/>
       <WhatToExpect/>
       <InfiniteMovingCardsDemo/>
       <FAQ/>
       <Footer/>
       </>
    );
}
