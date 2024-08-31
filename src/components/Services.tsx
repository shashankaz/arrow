import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "YouTube Growth",
    description:
      "Get personalized video ideas, optimized titles, descriptions, tags, and trending keywords to boost your YouTube channel growth.",
    link: "/services/youtube-growth",
  },
  {
    title: "Social Media Marketing",
    description:
      "Enhance your Instagram, TikTok, Twitter, and Facebook presence with tailored content suggestions, hashtags, and engagement tools.",
    link: "/services/social-media-marketing",
  },
  {
    title: "SEO & Content Creation",
    description:
      "Optimize your website content with SEO analysis, keyword suggestions, and blog post ideas to improve search rankings.",
    link: "/services/seo-content-creation",
  },
  {
    title: "Video Editing & Design",
    description:
      "Create stunning video thumbnails, social media graphics, and improve video quality with our editing tips and design tools.",
    link: "/services/video-editing-design",
  },
  {
    title: "Monetization & Business Growth",
    description:
      "Learn effective strategies to monetize your content through affiliate marketing, sponsorships, and e-commerce integration.",
    link: "/services/monetization-business-growth",
  },
  {
    title: "Analytics & Performance Tracking",
    description:
      "Track and analyze the performance of your videos and social media posts with detailed analytics and competitor comparisons.",
    link: "/services/analytics-performance-tracking",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24"
    >
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        How We Help You Grow
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Services;
