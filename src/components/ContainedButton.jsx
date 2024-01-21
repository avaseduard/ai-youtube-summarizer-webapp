import Button from '@mui/material/Button'

const ContainedButton = ({ text, onClick, variant }) => (
  <Button onClick={() => onClick()} variant={variant}>
    {text}
  </Button>
)

export default ContainedButton
