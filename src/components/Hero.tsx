import { Button } from "./ui/button"
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div className="w-full bg-black max-h-[40%] text-center text-">
      <section className="text-center pt-14">
        <h1 className="text-white text-5xl font-semibold tracking-wider">Transform Your Resume, <br />Elevate Your Career</h1>
        <p className="text-muted-foreground my-4">Unlock your potential with personalized resume analysis and tailored <br />improvement paths. Our service empowers you to stand out in the <br />job market and achieve your carrer goals</p>
      </section>
      <div className="py-6">
        <Button className="bg-blue-500">Upload Resume</Button>
      </div>
      <div className="text-muted-foreground pb-6">
        Rated 5/5 from over 500 reviews
      </div>
      <div className="w-full mx-auto">
        <img src={hero} alt="hero image" className="h-80 w-[70%] mx-auto"/>
      </div>
    </div>
  )
}

export default Hero
