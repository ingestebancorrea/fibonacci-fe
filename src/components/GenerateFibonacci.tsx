import { Box, Button, Typography } from "@mui/material";
const GenerateFibonacci = () => {
  return (
    <Box sx={{width: '50%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <Box>
      <Typography variant="subtitle1">Fecha y hora de ingreso: {}</Typography>
      <Typography variant="subtitle2">Resultado: {}</Typography>
    </Box>
    <Button variant="contained">Generar Fibonacci</Button>

  </Box>
  )
}

export default GenerateFibonacci