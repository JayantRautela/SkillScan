import { Button } from "./components/ui/button"

function App() {

  const clickHandle = () => {
    alert("Button clicked");
  }

  return (
    <>
      <Button onClick={clickHandle}>Click Me</Button>
    </>
  )
}

export default App
