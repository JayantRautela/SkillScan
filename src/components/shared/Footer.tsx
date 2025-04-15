import { Link } from "react-router-dom"

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-white h-64 p-12">
      <section className="text-center">
        <h1 className="tracking-tighter text-lg font-semibold">SkillScan</h1>
        <div className="flex gap-10 items-center justify-center mt-8 text-gray-700">
          <Link to='/'>Home</Link>
          <Link to='/resume-analysis'>Resume Analysis</Link>
          <Link to='/learning-path'>Learning Path</Link>
          <Link to='/success-stories'>Success Stories</Link>
        </div>
      </section>
      <div className="border border-gray-500 mt-12"></div>
      <section className="mt-8 flex justify-between">
        <div className="flex gap-4 text-gray-700 underline">
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/terms-of-service'>Terms of Service</Link>
          <Link to='/cookie-settings'>Cookie Settings</Link>
        </div>
        <div className="text-gray-700">
          <p>&copy; {year} SkillScan. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}

export default Footer
