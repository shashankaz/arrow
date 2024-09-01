import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

const Hero = () => {
  return (
    <Vortex rangeY={200}>
      <div className="flex flex-col items-center justify-center text-white h-screen px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight text-gray-300">
          Grow Your Digital Presence with our AI-Powered Tools and Services.
        </h1>
        <Link href="/services">
          <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded-xl border-t-2 border-purple-500">
            Get Started
          </button>
        </Link>
      </div>
    </Vortex>
  );
};

export default Hero;
