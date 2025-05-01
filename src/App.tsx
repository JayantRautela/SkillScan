import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from "./pages/Signup"
import { Toaster } from "./components/ui/sonner";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import OtpLogin from "./pages/OtpLogin";
import ForgotPassword from "./pages/ForgotPassword";

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
    path: "*", 
    element: <NotFound /> 
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
