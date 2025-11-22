import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;
