import { Link } from 'react-router-dom'
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex items-center justify-between px-10 bg-black text-white">
      <div className="tracking-tighter text-lg">
        SkillScan
      </div>
      <div className='flex gap-10'>
        <Link to='/'>Resume Analysis</Link>
        <Link to='/about'>Learning Path</Link>
        <Link to='/contact'>Success Stories</Link>
      </div>
      <div>
        <Button className='bg-blue-500 px-6 cursor-pointer hover:bg-blue-600'>Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar
