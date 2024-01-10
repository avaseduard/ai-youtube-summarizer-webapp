import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const AdvantageCard = ({ title, text, image, alt }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component='img'
        height='140'
        image={image}
        alt={alt}
        sx={{ padding: "1em 0 0 0", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {text}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  )
}

export default AdvantageCard
