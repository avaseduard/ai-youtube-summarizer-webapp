import { Alert, AlertTitle } from '@mui/material'

const AlertSpace = ({ severity, alertTitle, alertText, onClose }) => (
  <Alert style={{ textAlign: 'left' }} severity={severity} onClose={onClose}>
    <AlertTitle style={{ fontWeight: 'bold' }}>{alertTitle}</AlertTitle>
    {alertText}
  </Alert>
)

export default AlertSpace