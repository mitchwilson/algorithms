import { useEffect, useState } from 'react'
import '../App.css'

function StringReverse() {
  const [reversedString, setReversedString] = useState('')
    const [string, setString] = useState('')
  
    function handleKeypress(event) {
      setString(str=>str + event.key)
    }
  
    useEffect(()=>{
      window.addEventListener('keypress', handleKeypress)
  
      return ()=>{
        window.removeEventListener('keypress', handleKeypress)
      }
    }, [])
  
    useEffect(()=>{
      setReversedString(str=>[...string].reverse().join(''))
    }, [string])
  
    return (
      <section>
        <h1>String Reverse</h1>
        <p>Type anywhere. Your string and the reversed string will appear below. Reload the page to restart.</p>
        <section>
          <p>
            <label>Your string</label>: <code>{ string }</code>
          </p>
        <p>
          <label>Reversed str</label>: <code>{ reversedString }</code>
        </p>
        </section>
        <h2>Method</h2>
        <p>Using this code <code>[...string].reverse().join('')</code></p>
        <ol>
          <li>Convert the string to an array</li>
          <li>Use the <code>reverse</code> method to reverse the array</li>
          <li>Then use the <code>join</code> method to convert the array back into a string</li>
        </ol>
      </section>
    )
}

export default StringReverse