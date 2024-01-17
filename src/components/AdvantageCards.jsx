import Grid from '@mui/material/Grid'
import AdvantageCard from './AdvantageCard'
import efficient from '../images/efficient.png'
import powerful from '../images/powerful.png'
import easy from '../images/easy.png'

const AdvantageCards = () => (
  <Grid
    container
    spacing={2}
    display='flex'
    justifyContent='center'
    alignItems='center'
  >
    <Grid item xs='auto'>
      <AdvantageCard
        title={'Efficient'}
        text={
          'Ever wished you could enjoy a podcast without committing to a full 60 minutes? Introducing YouChatGPTube Summarizer – your solution for concise insights!'
        }
        image={efficient}
        alt={'efficient'}
      />
    </Grid>
    <Grid item xs='auto'>
      <AdvantageCard
        title={'Powerful'}
        text={
          'Uncover the essence of your favorite content effortlessly. Our advanced AI technology not only listens to the video but also skillfully summarizes it.'
        }
        image={powerful}
        alt={'powerful'}
      />
    </Grid>
    <Grid item xs='auto'>
      <AdvantageCard
        title={'Easy'}
        text={'Do not miss out on the essentials – give it a try today!'}
        image={easy}
        alt={'easy to use'}
      />
    </Grid>
  </Grid>
)

export default AdvantageCards
