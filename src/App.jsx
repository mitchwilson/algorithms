import './App.css'
import Home from './pages/Home.jsx'
import IntegerReverse from './pages/IntegerReverse.jsx'
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
            case '/integerreverse':
              page = <IntegerReverse />
              break;
            case '/stringreverse':
              page = <StringReverse />
              break;
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
