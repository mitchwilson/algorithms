import './App.css'
import BubbleSort from './pages/BubbleSort.jsx'
import Home from './pages/Home.jsx'
import IntegerReverse from './pages/IntegerReverse.jsx'
import MaxCharacter from './pages/MaxCharacter.jsx'
import Palindrome from './pages/palindrome.jsx'
import StringReverse from './pages/StringReverse.jsx'

function Navigation() {
  const currentPath = window.location.pathname

  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <a className="route-link" href="/" aria-current={currentPath === '/' ? 'page' : undefined}>Home</a>
    </nav>
  )
}

function App() {
  return (
    <>
      <Navigation />
      {
        ( ()=>{
          let page
          switch(window.location.pathname) {
            case '/bubblesort':
              page = <BubbleSort />
              break;
            // case '/debounce':
            //   page = <Debounce />
            //   break;
            case '/integerreverse':
              page = <IntegerReverse />
              break;
            case '/maxcharacter':
              page = <MaxCharacter />
              break;
            case '/palindrome':
              page = <Palindrome />
              break;
            case '/stringreverse':
              page = <StringReverse />
              break;
            // case '/throttle':
            //   page = <Throttle />
            //   break;
            case '/':
              page = <Home />
              break;
          }
          return page
        })()
      }
    </>
  )
}

export default App
