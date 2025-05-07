import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import { useSelector } from "react-redux";

interface FormState {
  username: string;
  email: string;
  password: string;
  file: File | null;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { user } = useSelector((store: any) => store.auth);
  const [formData, setFormData] = useState<FormState>({
    username: "",
    email: "",
    password: "",
    file: null,
  });

  if (user) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
        <p className="text-4xl text-gray-800">User is already Logged In</p>
        <Button className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-xl hover:bg-blue-700 transition" onClick={() => navigate('/')}>Back To Home</Button>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const sendFormData = new FormData();

    sendFormData.append("email", formData.email);
    sendFormData.append("password", formData.password);
    sendFormData.append("username", formData.username);
    if (formData.file) {
      sendFormData.append('file', formData.file);
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "https://skillscan-backend-production.up.railway.app/api/v1/users/register",
        sendFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(`Upload Success: ${response}`);
      if (response.status === 201) {
        toast.success("User Registered Successfully", {
          icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        });
        navigate("/login");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Some error occurred";
      toast.error(message, {
        icon: <XCircle className="text-red-600 w-5 h-5" />,
      });
    } finally {
      setIsSubmitting(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        file: null
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 bg-gradient-to-r from-neutral-300 to-stone-400">
      <div className="w-full max-w-xl p-10 border border-gray-200 rounded-2xl shadow-sm bg-[#fdfdfd]">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black">
            Register to <span className="text-blue-500">SkillScan</span>
          </h1>
        </section>

        <form className="flex flex-col gap-6" onSubmit={submitForm}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-base text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              required
              autoComplete="email"
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-base text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Choose a username"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              required
              autoComplete="username"
              disabled={isSubmitting}
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-base text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400"
              required
              autoComplete="new-password"
              disabled={isSubmitting}
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="profilePicture" className="text-base text-gray-700">
              Profile Picture
            </Label>
            <Input
              id="profilePicture"
              type="file"
              name="profilePicture"
              accept="image/*"
              placeholder="Enter your password"
              className="text-base border border-gray-300 focus:ring-2 focus:ring-blue-400 cursor-pointer"
              disabled={isSubmitting}
              onChange={handleFileChange}
            />
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-2 rounded-xl transition-all duration-200 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            className="text-blue-500 cursor-pointer hover:underline font-medium"
            onClick={() => navigate('/login')}
          >Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
