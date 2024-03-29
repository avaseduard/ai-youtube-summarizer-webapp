import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const AdvantageCard = ({ title, text, image, alt }) => (
  <Card sx={{ maxWidth: 345, height: 317, mb: 1 }}>
    <CardMedia
      component='img'
      height='140'
      image={image}
      alt={alt}
      sx={{ padding: '1em 0 0 0', objectFit: 'contain' }}
    />
    <CardContent>
      <Typography
        sx={{ color: 'black' }}
        gutterBottom
        variant='h5'
        component='div'
      >
        {title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {text}
      </Typography>
    </CardContent>
  </Card>
)

export default AdvantageCard
