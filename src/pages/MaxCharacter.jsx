import { useEffect, useState } from 'react'
import '../App.css'

function MaxCharacter() {
  const [string, setString] = useState('')

  function handleKeypress(event) {
    const key = event.key
    if(key === '') return
    setString(str=>str + key)
  }

  useEffect(()=>{
    window.addEventListener('keypress', handleKeypress)

    return ()=>{
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  const charCount = {}
  for (const character of string) {
    charCount[character] = (charCount[character] || 0) + 1
  }

  let maxCharacter = ''
  let maxCount = 0

  for (const [character, count] of Object.entries(charCount)) {
    if (count > maxCount) {
      maxCharacter = character
      maxCount = count
    }
  }

  return (
    <section>
      <h1>Max Character</h1>
      <p className="intro">Find the character that appears most often in a string. Type anywhere to begin. Reload the page to restart.</p>
      <h2>Algorithm 01</h2>
      <p>Count each character, then keep the character with the highest count.</p>
      <pre>
        <code>{`const charCount = {}
for (const character of string) {
  charCount[character] = (charCount[character] || 0) + 1
}

let maxCharacter = ''
let maxCount = 0
for (const [character, count] of Object.entries(charCount)) {
  if (count > maxCount) {
    maxCharacter = character
    maxCount = count
  }
}`}</code>
      </pre>
      <ol>
        <li>Count how many times each character appears.</li>
        <li>Iterate over the character counts.</li>
        <li>Store the character with the highest count.</li>
      </ol>
      <p>
        <label>Your string</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Max character</label>: <code className="reversed-string">{ maxCharacter || 'none' }</code>
      </p>
      <br></br>
      
    </section>
  )
}

export default MaxCharacter