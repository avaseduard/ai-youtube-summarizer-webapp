import Grid from '@mui/material/Grid'
import logo from '../../src/logo.png'
import { Item } from '../utilities/mui'

const Header = () => (
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

export default Header
