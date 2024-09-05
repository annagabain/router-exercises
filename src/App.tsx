
import './App.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="card">
        <header>


          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Outlet />


      </div>
    </>
  )
}

export default App
