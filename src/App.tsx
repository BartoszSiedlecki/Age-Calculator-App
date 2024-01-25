import './style.scss'
import { Form } from "./Form"
import { Answer } from "./Answer"

function App() {
  console.log(FormData)

  return (
    <>
      <div className="container">
        <Form />
        <Answer />
      </div>
    </>
  )
}

export default App
