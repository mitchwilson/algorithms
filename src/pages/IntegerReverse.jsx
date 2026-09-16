import { useEffect, useState } from 'react'
import '../App.css'

function IntegerReverse() {
  const [integer, setInteger] = useState(0)

  function handleKeypress(event) {
    const key = event.key
    
    if(Number.isNaN(Number(key))) return

    setInteger(prevInt=>{
      return Number(prevInt.toString() + key)
    })
  }

  useEffect(()=>{
    window.addEventListener('keypress', handleKeypress)

    return ()=>{
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  const reversedMethod1 = Number(integer.toString().split('').reverse().join(''))
  let reversedMethod2 = 0
  let remainingInteger = integer

  while (remainingInteger > 0) {
    const lastDigit = remainingInteger % 10
    reversedMethod2 = reversedMethod2 * 10 + lastDigit
    remainingInteger = Math.floor(remainingInteger / 10)
  }

  return (
    <section>
      <h1>Integer Reverse</h1>
      <p className="intro">Various JavaScript algorithms to reverse an integer value. Type anywhere. <code className="user-string">Your integer</code> and the <code className="reversed-string">reversed integer</code> will appear below. Reload the page to restart.</p>    
      <h2>Algorithm 01</h2>
      <p>Reverse the integer by first converting it to a string, then by using a common reverse string algorithm. Once reversed, convert back to a number</p>
      <pre>
        <code>{`const reversedString = integer.toString().split('').reverse().join('')
const reversedNumber = Number(reversedString)`}</code>
      </pre>
      <ol>
        <li>Convert the number to a string using the <code>toString</code> method.</li>
        <li>Then convert the string to an array using the <code>split</code> method.</li>
        <li>Then reverse the array using the <code>reverse</code> method.</li>
        <li>Then covert it from an array and back to a string using the <code>join</code> method.</li>
        <li>And finally covert the string back into a number using the <code>Number</code> type cast.</li>
      </ol>
      <p>
        <label>Your integer</label>: <code className="user-string">{ integer }</code>
      </p>
      <p>
        <label>Reversed int</label>: <code className="reversed-string">{ reversedMethod1 }</code>
      </p>
      <br></br>
      <h2>Algorithm 02</h2>
      <p>Reverse the integer using a while loop and the modulo operator to get the last character.</p>
      <pre>
        <code>{`let reversedMethod2 = 0
let remainingInteger = integer
while (remainingInteger > 0) {
  const lastDigit = remainingInteger % 10
  reversedMethod2 = reversedMethod2 * 10 + lastDigit
  remainingInteger = Math.floor(remainingInteger / 10)
}`}</code>
      </pre>
      <ol>
        <li>Use the remainder operator to get the last digit.</li>
        <li>Append that digit to the reversed integer.</li>
        <li>Use <code>Math.floor</code> to remove the last digit.</li>
      </ol>
      <p>
        <label>Your integer</label>: <code className="user-string">{ integer }</code>
      </p>
      <p>
        <label>Reversed int</label>: <code className="reversed-string">{ reversedMethod2 }</code>
      </p>
    </section>
  )
}

export default IntegerReverse