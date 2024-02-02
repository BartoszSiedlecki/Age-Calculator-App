import { useState } from "react"
import "./style.scss"
import { Form } from "./Form"
import { Answer } from "./Answer"
import { FormData } from "./types"

function App() {
  const [formData, setFormData] = useState<FormData | null>(null)

  function updateFormData(newData: FormData){
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