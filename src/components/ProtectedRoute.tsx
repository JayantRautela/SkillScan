import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((store: any) => store.auth);
  const navigate = useNavigate();

  return (
    <div>
      {
        !user && <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
          <p className="text-4xl text-gray-800">You must be Signed In to use this Feature</p>
          <Button className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-xl hover:bg-blue-700 transition" onClick={() => navigate('/')}>Back To Home</Button>
          {children}
        </div>
      }
    </div>
  )
}

export default ProtectedRoute
