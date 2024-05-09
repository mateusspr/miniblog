import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <div className='App'>
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
