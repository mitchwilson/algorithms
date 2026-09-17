import { useEffect, useState } from 'react'
import '../App.css'

function Palindrome() {
  const [string, setString] = useState('')

  function handleKeypress(event) {
    setString(str=>str + event.key)
  }

  function isPalindrome(word) {
    if(word === "") return ""
    return word === [...word].reverse().join('')
  }

  useEffect(()=>{
    window.addEventListener('keypress', handleKeypress)

    return ()=>{
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  return (
    <section>
      <h1>Palindrome</h1>
      <br></br>
      <h2>Algorithm 01</h2>
      <p>Using the strict equality operator <code>===</code>, do a boolean comparison of the original word with the reversed version.</p>
      <pre>
        <code>{`word === [...word].reverse().join('')`}</code>
      </pre>
      <ol>
        <li>Reverse the word using a common string reversal algorithm.</li>
        <li>Use a boolean comparison to compare the original word to the reversed word.</li>
        <li>Return the result of the boolean comparison.</li>
      </ol>
      <p>
        <label>Your word</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Is palindrome?</label>: <code className="reversed-string">{ String(isPalindrome(string)) }</code>
      </p>
    </section>
  )
}

export default Palindrome