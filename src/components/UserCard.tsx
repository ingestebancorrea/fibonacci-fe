import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const UserCard = () => {
    const { users } = useAppSelector((state) => state.user);

    return (
        <Box sx={{ display: "flex", paddingLeft: 4, gap: 2, flexWrap: "wrap" }}>
            {
                users.map((userItem, index) => (
                    <Card key={index} sx={{ width: 310, height: 340 }}>
                        <CardMedia
                            component="img"
                            alt="event"
                            height="140"
                            src={userItem.image_url}
                            sx={{
                                objectFit: 'cover', // Para ajustar la imagen dentro del contenedor
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {userItem.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: 'flex-start' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Género: {userItem.gender}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: 'flex-start' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Teléfono: {userItem.phone}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                <LocationOnOutlinedIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body1" color="text.third">
                                    País: {userItem.location.country}
                                </Typography>
                                <Typography variant="body1" color="text.third">
                                    Estado: {userItem.location.state}
                                </Typography>
                                <Typography variant="body1" color="text.third">
                                    Ciudad: {userItem.location.city}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
        </Box>
    );
};
