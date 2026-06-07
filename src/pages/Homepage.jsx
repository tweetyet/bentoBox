import Navbar from "../components/Navbar";
import Herobanner from "../components/Herobanner";
import FeatureSection from "../components/FeatureSection";
import TodaySpecial from "../components/TodaySpecial";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <TodaySpecial />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Homepage;