import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const InputField = ({value, onChange}) => {
  // const [value, setValue] = useState('')

  // const onChange = e => {
  //   e.preventDefault()
  //   setValue(e.target.value)
  //   console.log(e.target.value)
  // }

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
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
