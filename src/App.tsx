
import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'



function App() {
  

  return (
    <>
   <Navbar></Navbar>
   <div className='min-h-dvh'>
    <Outlet></Outlet>
   </div>
   <Footer></Footer>
    </>
  )
}

export default App
