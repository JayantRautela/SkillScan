import Card from "./Card"

const Secondary = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <section className="mt-20 ml-10">
        <h1 className="text-4xl font-semibold">Transform Your Resume To <br />The Next Level</h1>
        <p className="mt-4 text-muted-foreground">Submitting your resume is the first step towards <br />a strong carrer</p>
      </section>
      <section className="w-full bg-red flex mt-12 mx-20 overflow-hidden gap-6">
        <Card heading="Upload Your CV" content="Simply Upload your resume to get started" height="h-80" width="w-80" padding="p-6" fontColor="text-white"  backgroundColor="bg-black" />
        <Card heading="Recieve AI Feedback" content="Our AI analyzes your resume and offers suggestions" height="h-80" width="w-80" padding="p-6" fontColor="text-black" backgroundColor="bg-[#b1b3c5]"/>
        <Card heading="Upload Your CV" content="Simply Upload your resume to get started" height="h-80" width="w-80" padding="p-6" fontColor="text-black" backgroundColor="bg-[#a7d4df]"/>
      </section>
    </div>
  )
}

export default Secondary
