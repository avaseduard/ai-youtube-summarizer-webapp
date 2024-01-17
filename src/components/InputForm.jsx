import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Alert, AlertTitle, CircularProgress, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputField from './InputField'
import ContainedButton from './ContainedButton'
import { setSummary } from '../store/reducers/summary.reducer'
import { setTitle } from '../store/reducers/title.reducer'
import { setThumbnail } from '../store/reducers/thumbnail.reducer'
import { setTranscriptions } from '../store/reducers/transcriptions.reducer'

const InputForm = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  // Get value from input field
  const onChange = e => {
    e.target.value.includes('https://www.youtube.com/watch?v=')
      ? setError(false)
      : setError(true)
    setQuery(e.target.value)
  }

  // Paste from clipboard button functionality
  const handlePaste = async () => {
    setDisabled(true)
    try {
      const clipboardText = await navigator.clipboard.readText()
      setQuery(clipboardText)
      setDisabled(false)
    } catch (error) {
      console.error('Error reading clipboard content:', error)
      setDisabled(false)
    }
  }

  // Send video url to backend and get summary, thumbnail url and title in response
  const handleSummarize = () => {
    setDisabled(true)
    fetch('http://127.0.0.1:5000/get_summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ youtube_url: query }),
    })
      .then(response => response.json())
      .then(data => {
        setDisabled(false)
        dispatch(setSummary(data.summary))
        dispatch(setTitle(data.video_title))
        dispatch(setThumbnail(data.thumbnail_url))
        dispatch(setTranscriptions(data.transcriptions))
        setQuery('')
      })
      .catch(error => {
        console.error('Error fetching summary:', error)
        setDisabled(false)
        setErrorMessage(true)
      })
  }

  return (
    <Paper sx={{ mx: 2, mt: 4, mb: 2 }}>
      <Grid container spacing={2} sx={{ pb: 2, pl: 2 }}>
        <Grid item xs={8}>
          {disabled ? (
            <Alert style={{ textAlign: 'left' }} severity='info'>
              <AlertTitle style={{ fontWeight: 'bold' }}>
                Your summary is being generated
              </AlertTitle>
              Depending on the video's length, this might take a while, please
              wait.
            </Alert>
          ) : errorMessage ? (
            <Alert style={{ textAlign: 'left' }} severity='error'>
              <AlertTitle style={{ fontWeight: 'bold' }}>Oops!</AlertTitle>
              Something went wrong, please report the problem and refresh the
              page.
            </Alert>
          ) : (
            <InputField value={query} onChange={onChange} error={error} />
          )}
        </Grid>
        <Grid
          item
          xs={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Stack direction='row' spacing={2}>
            {disabled ? (
              <CircularProgress />
            ) : (
              <>
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
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default InputForm
