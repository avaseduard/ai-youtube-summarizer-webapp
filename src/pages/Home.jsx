import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import AdvantageCards from '../components/AdvantageCards'

const Home = () => {
  //
  return (
    <div className='Home'>
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo and title */}
        <Header />

        {/* YouTube video form */}
        <InputForm />

        {/* Advantage cards */}
        <AdvantageCards />
      </Box>
    </div>
  )
}

export default Home
