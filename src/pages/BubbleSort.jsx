import { useEffect, useState } from 'react'
import '../App.css'

function BubbleSort() {
  const [list, setList] = useState([])

  function handleKeypress(event) {
    const key = event.key
    if(key === '') return
    setList(arr=>[...arr, key])
  }

  useEffect(()=>{
    window.addEventListener('keypress', handleKeypress)

    return ()=>{
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  const sortedList = [...list]
  for (let pass = 0; pass < sortedList.length - 1; pass += 1) {
    for (let index = 0; index < sortedList.length - 1 - pass; index += 1) {
      if (sortedList[index] > sortedList[index + 1]) {
        const current = sortedList[index]
        sortedList[index] = sortedList[index + 1]
        sortedList[index + 1] = current
      }
    }
  }

  return (
    <section>
      <h1>Bubble Sort</h1>
      <p className="intro">Various JavaScript algorithms to sort a list of values. <code className="user-string">Your list</code> and the <code className="reversed-string">sorted list</code> will appear below. Reload the page to restart.</p>    
      <h2>Algorithm 01</h2>
      <p>Compare neighboring values and swap them when they are out of order.</p>
      <pre>
        <code>{`const sortedList = [...list]
for (let pass = 0; pass < sortedList.length - 1; pass += 1) {
  for (let index = 0; index < sortedList.length - 1 - pass; index += 1) {
    if (sortedList[index] > sortedList[index + 1]) {
      const current = sortedList[index]
      sortedList[index] = sortedList[index + 1]
      sortedList[index + 1] = current
    }
  }
}`}</code>
      </pre>
      <ol>
        <li>Copy the list so the original list stays unchanged.</li>
        <li>Compare each pair of neighboring values.</li>
        <li>Swap the pair when the left value is greater.</li>
        <li>Repeat the passes until the list is sorted.</li>
      </ol>
      <p>
        <label>Your entries</label>: <code className="user-string">{ list }</code>
      </p>
      <p>
        <label>Sort entries</label>: <code className="reversed-string">{ sortedList }</code>
      </p>
      <br></br>
      
    </section>
  )
}

export default BubbleSort