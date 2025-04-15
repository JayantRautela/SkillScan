import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Secondary from "@/components/Secondary"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Secondary />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
