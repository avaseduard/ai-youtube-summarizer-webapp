import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Item } from '../utilities/mui'

const Footer = () => (
    <Item sx={{ m: 1 }} >
      <Grid
        container
        spacing={2}
        sx={{ m: 1 }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs='auto'>
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

export default Footer
