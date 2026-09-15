import './App.css'
import Home from './pages/Home.jsx'
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
      {window.location.pathname === '/stringreverse' ? <StringReverse /> : <Home />}
    </>
  )
}

export default App
