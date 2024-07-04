import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFecthData";
import userEmpty from "../assets/empty-user.png";
import { Box, Typography } from "@mui/material";
import { Loading } from "../components/Loading";
import { useAppDispatch } from '../store/hooks';
import { setEvent } from "../store/user/userSlice";
import { AppLayout } from "../layout/AppLayout";
import { UserCard } from "../components/UserCard";

export const Home = () => {
  const { fetchData, data } = useFetchData();
  const dispatch = useAppDispatch();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetchData('/users');
  }, []);

  useEffect(() => {
    dispatch(setEvent(data));
  }, [data, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <Loading isLoading={showLoading} />;
  }

  return (
    <AppLayout>
      {data.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <UserCard />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={userEmpty} width={500} height={400} alt="No hay eventos" />
          <Typography variant="h5">
            No hay usuarios para visualizar.
          </Typography>
        </Box>
      )}
    </AppLayout>
  );
};
