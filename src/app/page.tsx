import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="bg-black text-gray-100">
      <Hero />
      <Services />
      <Testimonials />
      <Steps />
      <Plan />
    </div>
  );
};

export default Home;
