import { AuroraBackgroundDemo } from "@/components/AuraBackground";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SiliconValleyFellowship from "@/components/SiliconValley";
import SiliconValleyFellows from "@/components/SiliconValleyFellow";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/StarAndBack";
import { InfiniteMovingCardsDemo } from "@/components/Testimonial";
import WhatToExpect from "@/components/WhatToExpect";


export default function Home() {
  return (
    <div className="bg-background-default text-text-default bg-black dark:text-white">
       {/* <HeroSection/> */}
       <AuroraBackgroundDemo/>
       <ShootingStarsAndStarsBackgroundDemo/>
       {/* <SiliconValleyFellowship/> */}
       <SiliconValleyFellows/>
       <InfiniteMovingCardsDemo/>
       <WhatToExpect/>
       <FAQ/>
       <Footer/>
       </div>
    );
}
