export function Form(){

    function formData(e: Event){
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const day = formData.get('day') as string
        const month = formData.get('month') as string
        const year = formData.get('year') as string

        return formData
    }

    return(
        <form 
            className="top"
            onSubmit={formData}
        >
          <div className="fields">
            <div className="field">
              <label htmlFor="day"> Day </label>
              <input placeholder="DD" id="day" name="day"/>
            </div>
            <div className="field">
              <label htmlFor="month"> Month</label>
              <input placeholder="MM" id="month" name="month"/>
            </div>
            <div className="field">
              <label htmlFor="year"> Year </label>
              <input placeholder="YYYY" id="year" name="year"/>
            </div>
          </div>
          <div className="submit">
            <div className="line"></div>
            <button type="submit" className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
                <g fill="none" stroke="#FFF" stroke-width="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                </g>
              </svg>
            </button>
          </div>
        </form>
    )
}