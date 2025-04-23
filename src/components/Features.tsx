const Features = () => {
  return (
    <div className="w-full min-h-screen px-4 py-10">
      <section className="w-full text-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Unlock Your Career Potential with <br className="hidden sm:block" /> Our Comprehensive Resume Analysis
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          Our platform provides personalized feedback to help you shine
        </p>
      </section>

      <div className="flex flex-col gap-6 mt-10 items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center px-2">
          <div className="bg-black w-full sm:w-1/2 h-40 sm:h-48 rounded-lg"></div>
          <div className="bg-black w-full sm:w-1/2 h-40 sm:h-48 rounded-lg"></div>
        </div>
        <div className="bg-black w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-40 sm:h-48 rounded-lg mx-auto"></div>
      </div>
    </div>
  )
}

export default Features
