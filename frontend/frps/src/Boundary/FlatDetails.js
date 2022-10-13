import { Container, Grid, Card, Typography, Button, CardMedia, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import Portal from '../images/hero.jpg';


const FlatDetails = () => {
    return (
        <Card sx={{
            mt: '30px',
            minHeight: 500,
            maxHeight: 500,
            borderRadius: '20px',
            padding: '4rem',
            display: 'flex',
            ':hover': {
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
            },
        }}>

            <Grid container spacing={2} columns={12} sx={{ border: 1, color: 'pink', minHeight: '100px', maxHeight: '600px' }}>

                <Grid item xs={4} sx={{ border: 1, color: 'purple' }} >
                    <CardMedia
                        component="img"
                        height="200"
                        image={Portal}
                        sx={{
                            objectFit: "contain",
                            mb: '15px',
                            backgroundPosition: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    />
                </Grid>

                <Grid item xs={8} sx={{ border: 1, color: 'red' }}>
                    <Container sx={{ border: 1, color: 'orange' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            $45000
                        </Typography>
                    </Container>
                    <CardContent>
                        <Grid container sx={{ border: 1 }}>
                            <Grid item xs={12} md={6} sx={{ border: 1 }}>
                                <Grid container>
                                    <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            TOWN
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography variant="body1" component="div">
                                            lol
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            STREET
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography variant="body1" component="div">
                                            SIMS DR
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            LEASE COMMENCE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
                                        <Typography variant="body1" component="div">
                                            2012
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} md={6} marginBottom={1} sx={{ border: 1, color: 'green' }}>
                                <Grid container>
                                    <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            FLAT TYPE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography variant="body1" component="div">
                                            3 ROOM
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            FLAT MODEL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography variant="body1" component="div">
                                            Improved
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            AREA
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
                                        <Typography variant="body1" component="div">
                                            69
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Container>
                    <Typography>
                        map goes here
                    </Typography>
                </Container>
            </Grid>
        </Card >
    );
}


export default FlatDetails;