import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import thumbnail_image from '../images/youtube_thumbnail.jpg'

const Transcript = () => {
  const titleText = `Best Short Motivational Speech Video - 24 HOURS - 1-Minute Motivation #2`

  const summaryText = `- Success is dependent upon how you use your 24 hours in a day
  - Examples of successful individuals (Oprah Winfrey, Ted Turner, Warren Buffet) who utilize their 24 hours wisely
  - Regardless of one's financial background or circumstances, everyone only has 24 hours in a day
  - Personal experience of going from a high school dropout to selling 6,000 books in less than six months due to managing 24-hour schedule
  - Importance of organizing and maximizing one's 24-hour schedule for future success and trajectory
  `

  const transcriptText = `If you only have 24 hours in a day, your success is dependent upon how you use the 24. You got to hear me, people talk about Oprah Winfrey, you know, Ted Turner, Warren Buffet. Listen to me, I don't care how much money you make, you only get 24 hours in a day. And the difference between Oprah and the person that's broke is Oprah uses her 24 hours wisely. That's it, listen to me. That's it, you get 24. I don't care if you broke, you grew up broke. I don't care if you grew up rich. I don't care if you're in college, you're not in college. You only get 24 hours and I blew up literally. I went from being a high school dropout to selling 6,000 books in less than six months. What happened? My 24 hours. I was like, okay, Eric, you got to get a grip on your 24 hours because you about to be broke for the rest of your life. And that's all I need you to do for me. I can tell you all about your life if you just write down your 24-hour schedule for me. You let me look at it. I can tell you where you're going to be in five years. I can tell you where you're going to be in 10 years. I can tell you where you're going to be in 20 years if you keep that schedule.
`

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // overflow: 'hidden', // Ensure the image doesn't overflow the container
  }))

  return (
    <Grid container spacing={2} sx={{ mb: 2, mx: 1 }}>
      <Grid xs={6}>
        <Item>
          <h2 style={{color: 'black'}}>{titleText}</h2>
          <img
            src={thumbnail_image}
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item>
          <h2 style={{color: 'black'}}>AI summary</h2>
          {summaryText}
        </Item>
      </Grid>
      <Grid xs={12}>
        <Item>
          <h2 style={{color: 'black'}}>Full AI transcript</h2>
          {transcriptText}
        </Item>
      </Grid>
    </Grid>
  )
}

export default Transcript
