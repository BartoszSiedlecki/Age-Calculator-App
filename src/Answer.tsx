import { FormData } from "./types"

interface AnswerProps{
  formData: FormData
}

export function Answer({ formData }: AnswerProps){

  if(!formData){
    return(
      <div className="calculator"> 
        <div className="answer"><div className="number">--</div>years</div>
        <div className="answer"><div className="number">--</div>months</div>
        <div className="answer"><div className="number">--</div>days</div>
      </div>
    )
  }

  const formDay = formData.days
  const formMonth =  formData.months
  const formYear = formData.years

  const birthDate = new Date(formYear, formMonth - 1, formDay)
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear()
  let ageMonths = today.getMonth() - birthDate.getMonth()
  let ageDays = today.getDate() - birthDate.getDate()

  if(ageDays < 0){
    ageMonths--
    const previousMonth = today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1
    const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate()
    ageDays += daysInPreviousMonth
  }

  if(ageMonths < 0){
    ageYears--
    ageMonths += 12
  }

  return(
    <>
      <div className="answer">
        <div className="number">{ageYears}</div> {ageYears === 1 ? "year" : "years"}
      </div>
      <div className="answer">
        <div className="number">{ageMonths}</div> {ageMonths === 1 ? "month" : "months"}
      </div>
      <div className="answer">
        <div className="number">{ageDays}</div> {ageDays === 1 ? "day" : "days"}
      </div>
    </>
  )
}