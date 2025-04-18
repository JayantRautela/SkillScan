import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from "./pages/Signup"
import { Toaster } from "./components/ui/sonner";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  }
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
