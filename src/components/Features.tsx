import image1 from "../assets/image 1.jpeg";
import image2 from "../assets/image 2.jpeg";
import image3 from "../assets/image 3.jpeg";

const Features = () => {
  return (
    <div className="w-full min-h-screen px-4 py-10 bg-white">
      <section className="w-full text-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Unlock Your Career Potential with <br className="hidden sm:block" />
          Our Comprehensive Resume Analysis
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          Our platform provides personalized feedback to help you shine
        </p>
      </section>

      <div className="flex flex-col gap-8 mt-10 items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center px-2">
          <div className="bg-white w-full sm:w-1/2 rounded-xl shadow-md p-4 text-center border">
            <img
              src={image1}
              alt="Upload Resume"
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2">Upload Your Resume</h2>
            <p className="text-sm text-gray-600">
              Easily upload your resume in PDF or DOC format to get started with the analysis.
            </p>
          </div>

          <div className="bg-white w-full sm:w-1/2 rounded-xl shadow-md p-4 text-center border">
            <img
              src={image2}
              alt="AI Feedback"
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2">Receive AI Feedback</h2>
            <p className="text-sm text-gray-600">
              Our AI engine reviews your resume and offers personalized suggestions for improvement.
            </p>
          </div>
        </div>

        <div className="bg-white w-full sm:w-4/5 md:w-2/3 lg:w-1/2 rounded-xl shadow-md p-4 text-center border">
          <img
            src={image3}
            alt="Learning Paths"
            className="w-16 h-16 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-lg font-semibold mb-2">Get Personalized Learning Paths</h2>
          <p className="text-sm text-gray-600">
            Based on your resume gaps, get tailored course recommendations to upskill and stand out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
