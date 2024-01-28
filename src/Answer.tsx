import React from "react"

export function Answer({ formData }){

    const formDay = formData ? formData.get("day") : null
    const formMonth = formData ? formData.get("month") : null
    const formYear = formData ? formData.get("year") : null

    const today = new Date()
    let year = today.getFullYear() - formYear
    let month = today.getMonth()+1 - formMonth
    let day = today.getDate() - formDay

    if(month < 0 || month === 0 && day < 0){
      year--
      month = 12 + month
    }

    if(day < 0){
      month--
      const lastMonthDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
      day = lastMonthDay + day
    }

    return(
        <div className="calculator">
            <div className="answer">
              <div className="number"> { formYear !== null ? year : "--" } </div>
              { year == 1 ? "year" : "years" }
            </div>
            <div className="answer">
              <div className="number"> { formMonth !== null ? month : "--" } </div>
              { month == 1 ? "month" : "months" }
            </div>
            <div className="answer">
              <div className="number"> { formDay !== null ? day : "--" } </div>
              { day == 1 ? "day" : "days" }
            </div>
        </div>
    )
}