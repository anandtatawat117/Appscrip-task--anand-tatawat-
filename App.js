import React from 'react'
import NavBar from './NavBar'
import Main from './Components/Main'
import SideBar from './Components/SideBar'
import Product from './Components/Products'
import { Box } from '@mui/material'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Product />
      </Box>
      <Product />
      <Footer />
    </>
  )
}

export default App