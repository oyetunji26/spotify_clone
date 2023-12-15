import { BrowserRouter, Routes, Route } from 'react-router-dom';
import react from 'react'
import { Sidebar, Main} from './components'
import vite from '/vite.svg'

// import './App.css'

function App() {

  return (

    <BrowserRouter>
      <div className='md:grid md:grid-cols-12'>
        <div className='md:col-span-2 h-full text-[#fff] bg-[#000000]'>
          <Sidebar />
        </div>
        {/* twitter */}
        <div className='bg-back h-full px-12 pt-5 md:col-span-10'>
          <Main />
        </div>

        {/* vgdhj */}
      </div>

      <div className='fixed w-full bottom-0 py-4 bg-[#222]  shadow text-[#fff]'>
        gfvhjbk
      </div>

    </BrowserRouter>

  )
}

export default App