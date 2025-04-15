
const Features = () => {
  return (
    <div className="w-full h-screen p-10">
      <section className="w-full text-center">
        <h1 className="text-4xl font-semibold">Unlock Your Career Potential with <br />Our Comprehensive Resume Analysis</h1>
        <p className="mt-5 text-muted-foreground">Our platform provides personlized feedback to help you shine</p>
      </section>
      <div className="flex itmes-center w-full flex-col gap-6 mt-8 justify-center">
        <div className="w-full flex gap-6 items-center justify-center">
          <div className="bg-black w-[30%] h-48 rounded-lg"></div>
          <div className="bg-black w-[30%] h-48 rounded-lg"></div>
        </div>
        <div className="mx-auto bg-black w-[62%] h-48 rounded-lg"></div>
      </div>
      <div className="border-4 border-black mt-8"></div>
    </div>
  )
}

export default Features
