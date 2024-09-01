import { StickyScroll } from "@/components/ui/sticky-scroll-reveal.tsx";

const content = [
  {
    title: "Sign Up",
    description:
      "Create an account with your email or social media profiles. Get instant access to all our tools and services in just a few clicks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
        Sign Up
      </div>
    ),
  },
  {
    title: "Customize Your Profile",
    description:
      "Set up your profile with personal details and preferences. This will allow us to tailor our services to fit your needs and goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
        Customize Your Profile
      </div>
    ),
  },
  {
    title: "Start Using Tools",
    description:
      "Access a wide range of tools, from YouTube video suggestions to social media strategies. Start optimizing your content right away.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        Start Using Tools
      </div>
    ),
  },
  {
    title: "Monitor Your Progress",
    description:
      "Track your performance with our advanced analytics. Use real-time data to improve your strategy and grow your online presence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
        Monitor Your Progress
      </div>
    ),
  },
];

const Steps = () => {
  return (
    <div
      id="steps"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-gray-900"
    >
      <h1 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        How It Works
      </h1>
      <div className="my-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Steps;
