import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-10 border border-gray-200 rounded-2xl shadow-sm bg-[#fdfdfd]">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black">
            Register to <span className="text-blue-500">SkillScan</span>
          </h1>
        </section>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-base text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-base text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-base text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              disabled={isSubmitting}
            />
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-2 rounded-xl transition-all duration-200 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
