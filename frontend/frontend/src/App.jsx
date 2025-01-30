
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './componenets/Navbar'
import Home from './pages/Home'
import Footer from './componenets/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <main className='min-h-screen max-w-screen-2xl mx-auto px-10 py-10 font-primary'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
