import NavBar from "../NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";
import WhyUse from "./WhyUse";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Statistics />
      <WhyUse />
      <Footer />
    </>
  );
}

export default HomePage;
