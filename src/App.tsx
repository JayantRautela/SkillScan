import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from "./pages/Signup"
import { Toaster } from "./components/ui/sonner";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import OtpLogin from "./pages/OtpLogin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch } from 'react-redux';
import { logout, setUser } from './redux/authSlice';
import axios from 'axios';
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import SuccessStories from "./pages/SuccessStories";
import ResumeDetails from "./pages/ResumeAnalysis";
import ForgotPasswordRedirect from "./components/ForgotPasswordRedirect";
import ProtectedRoute from "./components/ProtectedRoute";

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login-otp',
    element: <OtpLogin />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/success-stories',
    element: <SuccessStories />
  },
  {
    path: '/redirect',
    element: <ForgotPasswordRedirect />
  },
  {
    path: '/resume-analysis',
    element: (
      <ProtectedRoute>
        <ResumeDetails />
      </ProtectedRoute>
    )
  },
  { 
    path: "*", 
    element: <NotFound /> 
  },
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const validateUser = async () => {
      try {
        const setToken = await axios.post<ServerResponse>('https://skillscan-backend-production.up.railway.app/api/v1/users/generateAccessToken', {
          withCredentials: true
        });
        
        const res = await axios.get<ServerResponse>('https://skillscan-backend-production.up.railway.app/api/v1/users/user', {
          withCredentials: true
        });

        dispatch(setUser(res.data.user));
      } catch (err) {
        dispatch(logout());
        localStorage.clear();
      }
    };

      validateUser();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
