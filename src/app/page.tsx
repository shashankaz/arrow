import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="bg-black text-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Steps />
      <Plan />
      <Footer />
    </div>
  );
};

export default Home;
