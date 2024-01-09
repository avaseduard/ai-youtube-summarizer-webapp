import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const ContainedButton = ({text, onClick, disabled, variant}) => {
  return (
      <Button
        onClick={() => onClick()}
        disabled={disabled}
        variant={variant}
      >
        {text}
      </Button>
  )
}

export default ContainedButton
