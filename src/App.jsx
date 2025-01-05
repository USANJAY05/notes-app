import React from 'react'
import { BrowserRouter } from 'react-router'
import NavBar from './components/navBar/NavBar'
import SideBar from './components/sideBar/SideBar'
import Main from './components/main/Main'

const App = () => {
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <div className='h-full flex flex-col overflow-auto'>
          <NavBar />
          <div className='h-full flex overflow-auto'>
            <SideBar />
            <Main />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App