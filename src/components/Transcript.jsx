import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'

const Transcript = () => {
  const [summaryText, setSummaryText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [transcriptionsText, setTranscriptionsText] = useState([])
  const summary = useSelector(state => state.summary.summary)
  const title = useSelector(state => state.title.title)
  const thumbnail = useSelector(state => state.thumbnail.thumbnail)
  const transcriptions = useSelector(
    state => state.transcriptions.transcriptions
  )

  // Set all fields with info from Redux
  useEffect(() => {
    setSummaryText(summary)
    setTitleText(title)
    setThumbnailUrl(thumbnail)
    setTranscriptionsText(transcriptions)
  }, [summary, title, thumbnail, transcriptions])

  //
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    // overflow: 'hidden', // Ensure the image doesn't overflow the container
  }))

  return (
    <Grid container spacing={2} sx={{ mb: 2, mx: 1 }}>
      <Grid xs={6}>
        <Item>
          <h2 style={{ color: 'black', textAlign: 'center' }}>{titleText}</h2>
          <img
            src={thumbnailUrl}
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item style={{ whiteSpace: 'pre-line' }}>
          <h2 style={{ color: 'black', textAlign: 'center' }}>AI summary</h2>
          {summaryText}
        </Item>
      </Grid>
      <Grid xs={12}>
        <Item>
          <h2 style={{ color: 'black', textAlign: 'center' }}>
            Full AI transcript
          </h2>
          {transcriptionsText}
        </Item>
      </Grid>
    </Grid>
  )
}

export default Transcript
