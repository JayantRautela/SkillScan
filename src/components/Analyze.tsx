import { Button } from "./ui/button"

const Analyze = () => {
  return (
    <div className="w-full h-96 bg-black text-center p-10">
      <section className="text-white px-8 mb-4">
        <h1 className="text-4xl font-semibold mb-2">Analyze Your Resume</h1>
        <p className="text-md">Ready to take your career to the next level?</p>
      </section>
      <div className="w-[30%] h-48 bg-white rounded-xl mx-auto mt-8 flex flex-col items-center justify-center">
        <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer">Upload Resume</Button>
        <p className="mt-8">or drop a Pdf, <br /><span>paste image or URL</span></p>
      </div>
    </div>
  )
}

export default Analyze
