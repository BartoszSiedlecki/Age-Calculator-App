import { useState } from "react"
import "./style.scss"
import { Form } from "./Form"
import { Answer } from "./Answer"

function App() {
  const [formData, setFormData] = useState(null)

  function updateFormData(newData){
    setFormData(newData)
  }

  return (
    <>
      <div className="container">
        <Form updateFormData={updateFormData}/>
        <Answer formData={formData}/>
      </div>
    </>
  )
}

export default App