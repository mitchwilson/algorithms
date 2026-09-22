import { useEffect, useState } from 'react'
import '../App.css'

function Palindrome() {
  const [string, setString] = useState('')

  function handleKeypress(event) {
    setString(str=>str + event.key)
  }

  function isPalindromeMethod1(word) {
    if(word === "") return false
    return word === [...word].reverse().join('')
  }

  function isPalindromeMethod2(word) {
    if(word === "") return false

    let left = 0
    let right = word.length - 1

    while(left < right) {
      if (word[left] !== word[right]) {
        return false
      }
      left += 1
      right -= 1
    }

    return true
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
        <label>Is palindrome?</label>: <code className="reversed-string">{ String(isPalindromeMethod1(string)) }</code>
      </p>
      <br></br>
      <h2>Algorithm 02</h2>
      <p>Using the strict inequality operator <code>{`!==`}</code>, do a boolean comparison of the first and last character of the string, then the second and second to last, etc.</p>
      <pre>
        <code>{`
let left = 0
let right = word.length - 1

while(left < right) {
  if (word[left] !== word[right]) {
    return false
  }
  left += 1
  right -= 1
}

return true
        `}</code>
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
        <label>Is palindrome?</label>: <code className="reversed-string">{ String(isPalindromeMethod2(string)) }</code>
      </p>
    </section>
  )
}

export default Palindrome