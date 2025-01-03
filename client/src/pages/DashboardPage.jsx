

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Home from '../components/Home'

const DashboardPage = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
     <>
     
     <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
     
     </>
  )
}

export default DashboardPage