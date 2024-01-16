import TextField from '@mui/material/TextField'

const InputField = ({ value, onChange, error }) => (
  <TextField
    fullWidth
    required
    id='outlined-basic'
    label='YouTube video URL'
    variant='outlined'
    error={error}
    onChange={onChange}
    value={value}
  />
)

export default InputField
