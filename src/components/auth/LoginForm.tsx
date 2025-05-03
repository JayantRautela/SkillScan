import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch} from "@/redux/store";
import { setUser } from "@/redux/authSlice";

interface FormState {
  username: string;
  password: string;
}

interface ServerResponse {
  message: string;
  user: {
    userId: string,
    username: string,
    email: string,
    profilePicture: string,
  };
  status: number;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormState>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await axios.post<ServerResponse>('http://localhost:2000/api/v1/users/login',
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      console.log(response)

      console.log(`Upload Success: ${response}`);
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        toast.success("User Logged In",{
          icon: <CheckCircle className="text-green-600 w-5 h-5" />
        });
        navigate('/');
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || error?.message || "Some error occurred";
      toast.error(message, {
        icon: <XCircle className="text-red-600 w-5 h-5" />
      });
    } finally {
      setIsSubmitting(false);
      setFormData({ 
        username: "",
        password: "" 
      });
    }
  }

  return (
    <div>
      <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-xl p-10 border border-gray-200 rounded-2xl shadow-sm bg-[#fdfdfd]">
          <section className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-black">
              Login to <span className="text-blue-500">SkillScan</span>
            </h1>
          </section>

          <form className="flex flex-col gap-6" onSubmit={submitForm}>
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
              <div className="text-right mt-1">
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline cursor-pointer"
                  onClick={() => navigate('/forgot-password')}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-2 rounded-xl transition-all duration-200 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </Button>
          </form>
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full text-base py-2 rounded-xl cursor-pointer"
              onClick={() => navigate('/login-otp')}
            >
              Login with OTP
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              type="button"
              className="text-blue-500 hover:underline font-medium cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
