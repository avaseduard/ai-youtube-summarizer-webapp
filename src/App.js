import React, { useState } from 'react'
import ContainedButton from './components/ContainedButton'
import Jumbotron from './components/Jumbotron'

import Stack from '@mui/material/Stack'

import './App.css'
import InputField from './components/InputField'

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
    try {
      const clipboardText = await navigator.clipboard.readText()
      setValue(clipboardText)
      // If you want to paste into the input field, you can use:
      // inputRef.current.value = clipboardText;
    } catch (error) {
      console.error('Error reading clipboard content:', error)
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

  return (
    <div className='App'>
      <Jumbotron />
      <InputField value={value} onChange={onChange} />
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
      <p>{summary}</p>
    </div>
  )
}

export default App
