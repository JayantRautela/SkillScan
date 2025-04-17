import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button';

const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/signup')
  }

  return (
    <nav className="h-16 w-full flex items-center justify-between px-10 bg-black text-white">
      <Link to='/' className="tracking-tighter text-lg cursor-pointer">
        SkillScan
      </Link>
      <div className='flex gap-10'>
        <Link to='/'>Resume Analysis</Link>
        <Link to='/about'>Learning Path</Link>
        <Link to='/contact'>Success Stories</Link>
      </div>
      <div>
        <Button className='bg-blue-500 px-6 cursor-pointer hover:bg-blue-600' onClick={clickHandler}>Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar
