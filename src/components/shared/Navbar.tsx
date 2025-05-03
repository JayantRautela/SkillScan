import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store: any) => store.auth);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/signup')
  }

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
                <AvatarImage src="user?.profile?.profilePhoto" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4 space-y-2">
                <Avatar>
                  <AvatarImage src="user?.profile?.profilePhoto" />
                </Avatar>
                <div>
                  <h4 className="font-medium">{user?.fullname}</h4>
                  <p className="text-sm text-muted-foreground">
                    {user?.profile?.bio}
                  </p>
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
