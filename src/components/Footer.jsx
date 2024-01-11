import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <Item sx={{ m: 2 }}>
      <Grid
        container
        spacing={2}
        // sx={{ m: 2 }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Grid xs='auto'>
          <Stack direction='row' spacing={1}>
            <h2
              style={{
                color: 'black',
                marginBottom: 'auto',
                marginTop: 'auto',
              }}
            >
              {'Created by <ed.dev/>'}
            </h2>
            <a href='mailto:avas.eduard@gmail.com'>
              <IconButton aria-label='contact email' sx={{ color: 'orange' }}>
                <AlternateEmailIcon />
              </IconButton>
            </a>
            <a href='https://github.com/avaseduard'>
              <IconButton aria-label='contact github' sx={{ color: 'black' }}>
                <GitHubIcon />
              </IconButton>
            </a>
            <a href='https://www.linkedin.com/in/avas-eduard/'>
              <IconButton
                aria-label='contact linkedin'
                sx={{ color: 'CornflowerBlue' }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          </Stack>
        </Grid>
      </Grid>
    </Item>
  )
}

export default Footer
