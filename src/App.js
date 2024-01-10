import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import ContainedButton from './components/ContainedButton'
import Jumbotron from './components/Jumbotron'
import InputField from './components/InputField'
import logo from './logo.png'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import easy from './images/easy.png'
import efficient from './images/efficient.png'
import powerful from './images/powerful.png'

import './App.css'
import AdvantageCard from './components/AdvantageCard'

function App() {
  const [summary, setSummary] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState('')

  const onChange = e => {
    e.preventDefault()
    setValue(e.target.value)
    console.log(e.target.value)
  }

  const handlePaste = async () => {
    setDisabled(true)
    try {
      const clipboardText = await navigator.clipboard.readText()
      setValue(clipboardText)
      setDisabled(false)
    } catch (error) {
      console.error('Error reading clipboard content:', error)
      setDisabled(false)
    }
  }

  const handleSummarize = () => {
    setDisabled(true)
    fetch('http://127.0.0.1:5000/get_summary')
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary)
        setDisabled(false)
        console.log('data.summary-->', data.summary)
      })
      .catch(error => {
        console.error('Error fetching summary:', error)
        setDisabled(false)
      })
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <div className='App'>
      {/* Logo and title */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid xs={4}>
            <img src={logo} alt='logo' />
          </Grid>
          <Grid
            xs={8}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <h1 className='display-4'>
              YouTube video summarizer with ChatGPT AI
            </h1>
          </Grid>
        </Grid>

        {/* YouTube video form */}
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid xs={8}>
            <InputField value={value} onChange={onChange} />
          </Grid>
          <Grid
            xs={4}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Stack direction='row' spacing={2}>
              <ContainedButton
                variant={'outlined'}
                disabled={disabled}
                onClick={handlePaste}
                text={'Paste link'}
              />
              <ContainedButton
                variant={'contained'}
                disabled={disabled}
                onClick={handleSummarize}
                text={'Summarize'}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Advantage cards */}
        <Grid container spacing={2} sx={{ mx: 6 }}>
          <Grid xs={4}>
            <AdvantageCard
              title={'Efficient'}
              text={
                'Ever wished you could enjoy a podcast without committing to a full 60 minutes? Introducing YouChatGPTube Summarizer – your solution for concise insights!'
              }
              image={efficient}
              alt={'efficient'}
            />
          </Grid>
          <Grid xs={4}>
            <AdvantageCard
              title={'Powerful'}
              text={
                'Uncover the essence of your favorite content effortlessly. Our advanced AI technology not only listens to the video but also skillfully summarizes it.'
              }
              image={powerful}
              alt={'powerful'}
            />
          </Grid>
          <Grid xs={4}>
            <AdvantageCard
              title={'Easy'}
              text={'Do not miss out on the essentials – give it a try today!'}
              image={easy}
              alt={'easy to use'}
            />
          </Grid>
        </Grid>
      </Box>

      <p>{summary}</p>
    </div>
  )
}

export default App
