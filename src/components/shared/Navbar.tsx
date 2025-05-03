import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button';
import { useState } from 'react';
import { CheckCircle, Menu, X, XCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { AppDispatch } from '@/redux/store';

interface ServerResponse {
  status: number;
  message: string;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/signup')
  }

  const logoutHandler = async () => {
    try {
      const res = await axios.get<ServerResponse>(`http://localhoat:2000/logout`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        dispatch(setUser(null));
        navigate("/home");
        toast.success(res.data.message, {
          icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        });
      }
    } catch (error: any) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Some error occurred";
        toast.error(message, {
          icon: <XCircle className="text-red-600 w-5 h-5" />,
        });
      }
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 bg-black text-white relative md:px-10">
      <Link to='/' className="tracking-tighter text-lg cursor-pointer">
        SkillScan
      </Link>
      <div className='hidden md:flex gap-10'>
        <Link to='/'>Resume Analysis</Link>
        <Link to='/about'>Learning Path</Link>
        <Link to='/contact'>Success Stories</Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <X className="cursor-pointer w-6 h-6" /> : <Menu className="w-6 h-6 cursor-pointer" />}
        </button>
      </div>
      <div className="hidden md:block">
        {!user ? (
          <Button className='bg-blue-500 px-6 cursor-pointer hover:bg-blue-600' onClick={clickHandler}>Sign Up</Button>
        ) : (
            <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profilePicture} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4 space-y-2 flex-col">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={user?.profilePicture} />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.username}</h4>
                  </div>
                </div>
                <div>
                  <Button className='cursor-pointer' onClick={logoutHandler}>LogOut</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 md:hidden z-10">
          <Link to='/' onClick={() => setMenuOpen(false)}>Resume Analysis</Link>
          <Link to='/about' onClick={() => setMenuOpen(false)}>Learning Path</Link>
          <Link to='/contact' onClick={() => setMenuOpen(false)}>Success Stories</Link>
          <Button
            className="bg-blue-500 px-6 cursor-pointer hover:bg-blue-600"
            onClick={() => {
              setMenuOpen(false)
              clickHandler()
            }}
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar