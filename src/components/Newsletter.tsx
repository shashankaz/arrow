"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const placeholders = [
  "Stay in the loop with us!",
  "Get the latest updates delivered!",
  "Join our community of insiders.",
  "Be the first to know!",
  "Unlock exclusive content!",
  "Your inbox deserves this.",
  "Subscribe for fresh insights!",
  "Don’t miss out on news and tips.",
  "Get inspired—sign up today!",
  "Stay informed, stay ahead!",
];

const Newsletter = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex items-center justify-center flex-col py-12">
      <h4 className="text-2xl mb-4 text-gray-400">
        Subscribe to Our Newsletter
      </h4>
      <div className="w-full max-w-sm">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Newsletter;
