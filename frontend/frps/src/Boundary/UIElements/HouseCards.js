import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material"
import Portal from '../../images/hero.jpg';


const HouseCards = () => {
    return (
        <div>
            <Card sx={{
                mt: '30px',
                mb: '30px',
                minHeight: 100,
                maxHeight: 300,
                borderRadius: '20px',
                padding: '4rem',
                // textAlign: 'center',
                // justifyContent: 'center',
                display: 'flex',
                ':hover': {
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                },
            }}>

                <Grid container spacing={2} columns={12} sx={{ border: 0 }}>

                    <Grid item xs={4} sx={{ border: 0, color: '' }} >
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

                    <Grid item xs={8} sx={{ border: 0, color: '' }}>
                        <CardContent>
                            <Grid container sx={{ border: 0 }}>
                                <Grid item xs={12} md={6}>
                                    <Grid container>
                                        <Grid item xs={4} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                TOWN
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                lol
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                STREET
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                SIMS DR
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                LEASE COMMENCE
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                2012
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} md={6} marginBottom={1}>
                                    <Grid container>
                                        <Grid item xs={5} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                FLAT TYPE
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                3 ROOM
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                FLAT MODEL
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                Improved
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5} marginBottom={2}>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                AREA
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7} marginBottom={2}>
                                            <Typography variant="body1" component="div">
                                                69
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>



                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>


                        <Typography gutterBottom variant="h5" component="div" sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            $45000
                        </Typography>

                    </Grid>
                </Grid>
            </Card >
        </div >
    )
}


export default HouseCards
