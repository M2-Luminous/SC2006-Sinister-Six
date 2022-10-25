import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';

import images from '../../Control/ImageController';

//image randomizer based on last char of flat ID
const imageRNG = (flatID) => {
    const lastChar = flatID.charAt(flatID.length - 1);
    const lastCharInt = lastChar.charCodeAt(0) % 20;
    return images[lastCharInt];

}

const HouseCards = ({ flats }) => {
    return (
        flats.map((flat) => (

            < div >
                <Card sx={{
                    mt: '30px',
                    mb: '30px',
                    minHeight: 100,
                    maxHeight: 300,
                    borderRadius: '20px',
                    padding: '4rem',
                    // textAlign: 'center',
                    // justifyContent: 'center'
                    display: 'flex',
                    ':hover': {
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                    },
                }}>
                    <CardActionArea sx={{ flexGrow: 1 }} component={Link} to={`/flat/${flat.getFlatID()}`}>
                        <Grid container spacing={2} columns={12} sx={{ border: 0 }}>

                            <Grid item xs={4} sx={{ border: 0, color: '' }} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={imageRNG(flat.flatID)}
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
                                                        {flat.getTown()}
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
                                                        {flat.getStreetName()}
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
                                                        {flat.getLeaseCommenceDate()}
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
                                                        {flat.getFlatType()}
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
                                                        {flat.getFlatModel()}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5} marginBottom={2}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        FLOOR AREA
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={7} marginBottom={2}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getFloorAreaSqm()} sqm
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>


                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    fontWeight: 'bold',
                                }}>
                                    ${flat.getPrice()}
                                </Typography>

                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card >
            </div >
        ))
    )
}


export default HouseCards
