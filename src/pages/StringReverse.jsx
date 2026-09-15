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
      let newString = ""
      for(const character of string) {
        newString = character + newString
      }
      return newString
    })
  }, [string])

  return (
    <section>
      <h1>String Reverse</h1>
      <p className="intro">Various JavaScript algorithms to reverse a string value. Type anywhere. <code className="user-string">Your string</code> and the <code className="reversed-string">reversed string</code> will appear below. Reload the page to restart.</p>
      <h2>Algorithm 01</h2>
      <p>Reverse the string using the spread operator and array methods:</p>
      <pre>
        <code>[...string].reverse().join('')</code>
      </pre>
      <ol>
        <li>Use the spread operator <code>...</code> to convert the string to an array.</li>
        <li>Use the <code className="alpha">reverse</code> method to reverse the array.</li>
        <li>Then use the <code>join</code> method to convert the array back into a string.</li>
      </ol>
      <p>
        <label>Your string</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Reversed str</label>: <code className="reversed-string">{ reversedStringMethod1 }</code>
      </p>
      <br></br>
      <h2>Algorithm 02</h2>
      <p>Reverse the string using a <code>for ... of</code> loop and string concatenation:</p>
      <pre>
        <code>{`let newString = ''
for (const character of string) {
  newString = character + newString
}`}</code>
      </pre>
      <ol>
        <li>Create a new empty <code>newString</code> variable.</li>
        <li>Iterate over each <code>character</code> in the <code>string</code>.</li>
        <li>Prepend each <code>character</code> to the beginning of the <code>newString</code>.</li>
      </ol>
      <p>
        <label>Your string</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Reversed str</label>: <code className="reversed-string">{ reversedStringMethod2 }</code>
      </p>
    </section>
  )
}

export default StringReverse