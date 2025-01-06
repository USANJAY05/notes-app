import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './components/navBar/NavBar'
import SideBar from './components/sideBar/SideBar'
import Notes from './pages/Notes'
import Missing from './pages/Missing'
import Main from './pages/Main'

const App = () => {
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <div className='h-full flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-fuchsia-400'>
          <NavBar />
          <div className='h-full flex overflow-auto'>
            <SideBar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/notes/:id' element={<Notes />} />
              <Route path='*' element={<Missing />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App