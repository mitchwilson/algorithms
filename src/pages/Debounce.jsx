import { useEffect, useState } from 'react'
import '../App.css'

function Debounce() {
  const [userInput, setUserInput] = useState('')
  const delay = 500

  function debouncer(func, delay) {
    let timerId
    
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(()=>{
        func(...args)
      }, delay)
    }
  }
  
  function handleInput(event) {
    const inputValue = event.target.value
    if(inputValue === '') return
    setUserInput(inputValue)
  }

  return (
    <section>
      <h1>Debounce</h1>
      <p className="intro">
        Debounce user input while they are typing. Send their input after they have stopped typing.
      </p>
      <p>
        Type <code className="user-string">Your userinput</code> in the form below. The <code className="reversed-string">debounced userinput</code> will appear underneath. Use the reset button to clear your input.
      </p>
      <br></br>
      <div>
       <form onReset={ handleInput } onSubmit={ e=>e.preventDefault() }>
         <label>Your entries</label>: <input className="user-string" onChange={ debouncer(handleInput, delay) }></input>
        <input type="reset"></input>
       </form>
      </div>
      <p>
        <label>Sort entries</label>: <code className="reversed-string">{ userInput }</code>
      </p>
      <br></br>
      <h2>Algorithm</h2>
      <p>Debounce user input while they are typing. Send their input after they have stopped typing.</p>
      <pre>
        <code>{`
function debouncer(func, delay) {
  let timerId
  
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(()=>{
      func(...args)
    }, delay)
  }
}
        `}</code>
      </pre>
      <ol>
        <li>Create a function that takes two arguments. The first argument is the function to debounce.  The second argument is the delay time for the debounce in milliseconds.</li>
        <li>Define a timer id variable to keep track of the most recent timer id, so we can cancel it when needed.</li>
        <li>Return the debounce function that they user will call to debounce their function. When it's called, it will clear the last id to stop the debounced function from running.</li>
      </ol>
      
    </section>
  )
}

export default Debounce