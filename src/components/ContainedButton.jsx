import Button from '@mui/material/Button'

const ContainedButton = ({ text, onClick, disabled, variant }) => (
  <Button onClick={() => onClick()} disabled={disabled} variant={variant}>
    {text}
  </Button>
)

export default ContainedButton
