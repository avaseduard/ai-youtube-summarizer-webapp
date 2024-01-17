import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import AdvantageCards from '../components/AdvantageCards'
import Footer from '../components/Footer'
import Transcript from '../components/Transcript'

const Home = () => {
  const summary = useSelector(state => state.summary.summary)

  return (
    <div className='Home'>
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo & title */}
        <Header />

        {/* YouTube video form */}
        <InputForm />

        {/* Video thumbnail, summary & transcription */}
        {summary && <Transcript />}

        {/* Advantage cards */}
        <AdvantageCards />

        {/* Footer */}
        <Footer />
      </Box>
    </div>
  )
}

export default Home
