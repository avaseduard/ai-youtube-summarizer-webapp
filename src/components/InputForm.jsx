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
import AlertSpace from './AlertSpace'

const InputForm = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  // Get value from input field
  const onChange = e => {
    e.target.value.includes('https://www.youtube.com/watch?v=')
      ? setInputError(false)
      : setInputError(true)
    setQuery(e.target.value)
  }

  // Paste from clipboard, when button is pressed, into input field
  const handlePaste = async () => {
    setLoading(true)
    try {
      const clipboardText = await navigator.clipboard.readText()
      setQuery(clipboardText)
      setLoading(false)
    } catch (error) {
      console.error('Error reading clipboard text -->', error)
      setLoading(false)
      setErrorMessage(true)
    }
  }

  // Dispatch data to Redux store
  const dispatchToRedux = data => {
    dispatch(setSummary(data.summary))
    dispatch(setTitle(data.video_title))
    dispatch(setThumbnail(data.thumbnail_url))
    dispatch(setTranscriptions(data.transcriptions))
  }

  // Set data to local storage
  const setDataToLocalStorage = (key, data) => {
    const localStoredData = {
      summary: data.summary,
      video_title: data.video_title,
      thumbnail_url: data.thumbnail_url,
      transcriptions: data.transcriptions,
    }
    localStorage.setItem(key, JSON.stringify(localStoredData))
  }

  // Send video url to backend and get summary, transcription, thumbnail url and title in response
  const handleSummarize = () => {
    // Get video id from query url
    const videoId = query.slice(query.indexOf('=') + 1)
    //
    setLoading(true)
    // If data is already in local storage, get it form there, else fetch from backend
    if (localStorage.getItem(videoId)) {
      const data = JSON.parse(localStorage.getItem(videoId))
      dispatchToRedux(data)
      setQuery('')
      setLoading(false)
    } else {
      fetch('http://127.0.0.1:5000/get_summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ youtube_url: query }),
      })
        .then(response => response.json())
        .then(data => {
          dispatchToRedux(data)
          setDataToLocalStorage(videoId, data)
          setQuery('')
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching summary:', error)
          setLoading(false)
          setErrorMessage(true)
        })
    }
  }

  return (
    <Paper sx={{ mx: 2, mt: 4, mb: 2 }}>
      <Grid container spacing={2} sx={{ pb: 2, pl: 2 }}>
        {/* Input field or alerts */}
        <Grid item xs={8}>
          {loading ? (
            <AlertSpace
              severity={'info'}
              alertTitle={'Your summary is being generated'}
              alertText={
                'Depending on the video, this might take a while, please wait.'
              }
            />
          ) : errorMessage ? (
            <AlertSpace
              severity={'error'}
              alertTitle={'Oops!'}
              alertText={
                'Something went wrong, please report the problem and refresh the page.'
              }
              onClose={() => {
                setErrorMessage(false)
              }}
            />
          ) : (
            <InputField value={query} onChange={onChange} error={inputError} />
          )}
        </Grid>
        {/* Buttons or loading spinner */}
        <Grid
          item
          xs={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Stack direction='row' spacing={2}>
            {loading || errorMessage ? (
              <CircularProgress />
            ) : (
              <>
                <ContainedButton
                  variant={'outlined'}
                  onClick={handlePaste}
                  text={'Paste link'}
                />
                <ContainedButton
                  variant={'contained'}
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
