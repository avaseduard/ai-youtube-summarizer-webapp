import Grid from '@mui/material/Grid'
import logo from '../../src/logo.png'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Header = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <Item sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={logo} alt='logo' />
        </Grid>
        <Grid
          item
          xs='auto'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <h1 style={{ color: 'black' }} className='display-4'>
            YouTube video summarizer with ChatGPT AI
          </h1>
        </Grid>
      </Grid>
    </Item>
  )
}

export default Header
