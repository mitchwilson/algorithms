import { useEffect, useState } from 'react'
import '../App.css'

function IntegerReverse() {
  const [reversedIntegerMethod1, setReversedIntegerMethod1] = useState('')
  const [reversedStringMethod2, setReversedIntegerMethod2] = useState('')
  const [string, setString] = useState('')

  function handleKeypress(event) {
    const character = Number(event.key)
    
    if(Number.isNaN(character)) return

    setString(prevInt=>prevInt + character)
  }

  function reverseInt(int) {

  }

  useEffect(()=>{
    window.addEventListener('keypress', handleKeypress)

    return ()=>{
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  useEffect(()=>{
    setReversedIntegerMethod1(int=>{

    })
    setReversedIntegerMethod2(int=>{
      
    })
  }, [string])

  return (
    <section>
      <h1>Integer Reverse</h1>
      <p className="intro">Various JavaScript algorithms to reverse an integer value. Type anywhere. <code className="user-string">Your integer</code> and the <code className="reversed-string">reversed integer</code> will appear below. Reload the page to restart.</p>
      
      <br></br>
      
      <h2>Algorithm 01</h2>
      <p>Reverse the integer using ... :</p>
      <pre>
        <code>{`[code]`}</code>
      </pre>
      <ol>
        <li>Step 1 ...</li>
        <li>Step 2 ...</li>
        <li>Step 3.</li>
      </ol>
      <p>
        <label>Your integer</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Reversed int</label>: <code className="reversed-string">{ reversedStringMethod2 }</code>
      </p>
      <br></br>
      <h2>Algorithm 02</h2>
      <p>Reverse the integer using ... :</p>
      <pre>
        <code>[code]</code>
      </pre>
      <ol>
        <li>Step 1 ...</li>
        <li>Step 2 ...</li>
        <li>Step 3.</li>
      </ol>
      <p>
        <label>Your integer</label>: <code className="user-string">{ string }</code>
      </p>
      <p>
        <label>Reversed int</label>: <code className="reversed-string">{ reversedIntegerMethod1 }</code>
      </p>
    </section>
  )
}

export default IntegerReverse