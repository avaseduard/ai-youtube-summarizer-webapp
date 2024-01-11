import { useState } from 'react'
import { Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import InputField from './InputField'
import ContainedButton from './ContainedButton'

const InputForm = () => {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [summary, setSummary] = useState('')

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
    <Item sx={{ m: 2 }}>
      <Grid container spacing={2} sx={{ m: 1 }}>
        <Grid xs={8} >
          <InputField  value={value} onChange={onChange} />
        </Grid>
        <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
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
    </Item>
  )
}

export default InputForm
