import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const InputField = ({ value, onChange }) => {
  //
  return (
    // <Box
    //   component='form'
    //   sx={{
    //     '& .MuiTextField-root': { m: 1 },
    //   }}
    //   noValidate
    //   autoComplete='off'
    // >
    //   <div>
    <TextField
      fullWidth
      required
      id='outlined-basic'
      label='YouTube video URL'
      variant='outlined'
      error
      // helperText='Invalid URL'
      onChange={onChange}
      value={value}
    />
    //   </div>
    // </Box>
  )
}

export default InputField
