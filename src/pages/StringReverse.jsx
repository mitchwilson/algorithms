import { useEffect, useState } from 'react'
import '../App.css'

function StringReverse() {
  const [reversedStringMethod1, setReversedStringMethod1] = useState('')
  const [reversedStringMethod2, setReversedStringMethod2] = useState('')
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
    setReversedStringMethod1(str=>[...string].reverse().join(''))
    setReversedStringMethod2(str=>{
      return str
    })
  }, [string])

  return (
    <section>
      <h1>String Reverse</h1>
      <p className="intro">Various JavaScript algorithms to reverse a string value. Type anywhere. Your string and the reversed string will appear below. Reload the page to restart.</p>
      <h2>Algorithm 01</h2>
      <p>Using this code <code>[...string].reverse().join('')</code></p>
      <ol>
        <li>Convert the string to an array</li>
        <li>Use the <code className="alpha">reverse</code> method to reverse the array</li>
        <li>Then use the <code>join</code> method to convert the array back into a string</li>
      </ol>
        <p>
          <label>Your string</label>: <code className="alpha">{ string }</code>
        </p>
        <p>
          <label>Reversed str</label>: <code>{ reversedStringMethod1 }</code>
        </p>
    </section>
    
  )
}

export default StringReverse