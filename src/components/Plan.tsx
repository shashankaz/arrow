import { GlareCard } from "./ui/glare-card";
import Link from "next/link";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic YouTube video suggestions",
      "Limited tag recommendations",
      "Basic social media tips",
      "Basic analytics reports",
    ],
    cta: "Sign Up for Free",
    link: "/signup/free",
  },
  {
    title: "Pro",
    price: "$19/month",
    features: [
      "Advanced YouTube video suggestions",
      "Full tag optimization",
      "Advanced social media strategies",
      "Detailed analytics reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    link: "/signup/pro",
    popular: true,
  },
  {
    title: "Business",
    price: "$49/month",
    features: [
      "Complete YouTube growth toolkit",
      "Social media management tools",
      "Comprehensive analytics and tracking",
      "Custom SEO and content creation",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    link: "/contact-sales",
  },
];

const Plan = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24"
    >
      <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        Choose Your Plan
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {plans.map((plan, index) => (
          <div key={index}>
            <GlareCard className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-evenly h-full">
                <div>
                  {plan.popular && (
                    <span className="px-3 py-1 mb-2 text-sm font-semibold bg-purple-500 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">
                    {plan.title}
                  </h3>
                  <p className="text-xl font-medium text-gray-300 mb-4 text-center">
                    {plan.price}
                  </p>
                  <ul className="text-gray-400 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2 text-center">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    href={plan.link}
                    className={`px-4 py-2 font-semibold text-white rounded-md ${
                      plan.popular ? "bg-purple-500" : "bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </GlareCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
