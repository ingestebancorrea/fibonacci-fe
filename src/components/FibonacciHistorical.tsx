import { Box, Card, CardActionArea, CardHeader } from "@mui/material";

const FibonacciHistorical = () => {
  return (
    <Box sx={{width: '50%', height: '500px',}}>
    <Card>
      <CardHeader
        component={CardActionArea}
        title={`Fecha: ${'fecha'}`}
        subheader={`Fibonacci: ${'132655'}`}
      />
    </Card>
  </Box>
  )
}

export default FibonacciHistorical