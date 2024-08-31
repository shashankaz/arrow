import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const items = [
  {
    name: "John Doe",
    quote:
      "Using these tools, my YouTube channel grew by 150% in just 3 months! The video ideas and keyword suggestions were spot-on.",
    title: "Los Angeles, CA",
  },
  {
    name: "Jane Smith",
    quote:
      "The social media growth strategies completely transformed my Instagram presence. My engagement has never been better!",
    title: "New York, NY",
  },
  {
    name: "Carlos Rodriguez",
    quote:
      "The SEO and content creation tools helped me rank higher on Google and attract more visitors to my blog. Amazing service!",
    title: "Miami, FL",
  },
  {
    name: "Emily Johnson",
    quote:
      "I never knew video editing could be so easy! The design tools helped me create eye-catching thumbnails and graphics that boosted my viewership.",
    title: "Austin, TX",
  },
  {
    name: "Michael Lee",
    quote:
      "Thanks to the analytics and performance tracking, I’ve been able to refine my content strategy and see real growth across all platforms.",
    title: "Seattle, WA",
  },
];

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24"
    >
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        What Our Users Are Saying
      </h1>
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="slow"
          className="mt-12"
        />
      </div>
    </div>
  );
};

export default Testimonials;
