import { Container, Stack } from "@mui/material";
import FibonacciHistorical from "../components/FibonacciHistorical";
import GenerateFibonacci from "../components/GenerateFibonacci";
import { AppLayout } from "../layout/AppLayout";

export const Home = () => {

  // Custom hook de RTK query para consumo de back de serie fibonacci, se debe enviar la fecha
  // const {data, isLoading,} = useGetFibonacciQuery()

  return (
    <AppLayout>
      <Container>
        <Stack sx={{width: '100%', flexDirection: 'row', gap: 2}} >

        {/* Generación */}
        <GenerateFibonacci/>

        {/* Historial */}
        <FibonacciHistorical/>

        </Stack>
      </Container>
    </AppLayout>
  );
};
