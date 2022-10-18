import { Container, Grid, Card, Typography, CardMedia, CardContent, Button } from '@mui/material';
import Portal from '../images/hero.jpg';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneFlat } from '../Controller/DatabaseController';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';

import Flat from '../Entity/Flat';


const FlatDetails = () => {

    // might be able to decouple into another js file, maybe IndividualFlatController
    const { flatID } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flat, setFlat] = useState([]);

    useEffect(() => {
        console.log("fetching oneFlat..");
        (async () => {
            try {
                const oneFlat = await getOneFlat(flatID);
                let results;
                if (oneFlat.data() == null) {
                    setLoading(false);
                    setError("No such flat exists");
                } else {
                    setLoading(false);
                    results = new Flat(
                        oneFlat.id,
                        oneFlat.data().block,
                        oneFlat.data().flat_model,
                        oneFlat.data().flat_type,
                        oneFlat.data().floor_area_sqm,
                        oneFlat.data().lease_commence_date,
                        oneFlat.data().month,
                        oneFlat.data().resale_price,
                        oneFlat.data().storey_range,
                        oneFlat.data().street_name,
                        oneFlat.data().town
                    )
                    setFlat(results);
                }
            } catch (err) {
                console.log("ERROR:" + err);
            }

        })();
    }, []);

    // const handleBack = () => {
    //     window.history.back();
    // }


    return (
        <Container sx={{ my: '30px' }}>
            <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to={'/home'} >
                Back
            </Button>

            {loading && <Container sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}><CircularProgress /></Container>}
            {!loading &&

                <Card sx={{
                    mt: '20px',
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
                                    fontWeight: 'bold',
                                }}>
                                    ${flat.getPrice()}
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
                                                    {flat.getTown()}
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
                                                    {flat.getStreetName()}
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
                                                    {flat.getLeaseCommenceDate()}
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
                                                    {flat.getFlatType()}
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
                                                    {flat.getFlatModel()}
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
                                                    {flat.getFloorAreaSqm()}
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
            }
        </Container>
    );

}


export default FlatDetails;

// return (
//     <Card sx={{
//         mt: '30px',
//         minHeight: 500,
//         maxHeight: 500,
//         borderRadius: '20px',
//         padding: '4rem',
//         display: 'flex',
//         ':hover': {
//             boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
//         },
//     }}>

//         <Grid container spacing={2} columns={12} sx={{ border: 1, color: 'pink', minHeight: '100px', maxHeight: '600px' }}>

//             <Grid item xs={4} sx={{ border: 1, color: 'purple' }} >
//                 <CardMedia
//                     component="img"
//                     height="200"
//                     image={Portal}
//                     sx={{
//                         objectFit: "contain",
//                         mb: '15px',
//                         backgroundPosition: 'center',
//                         textAlign: 'center',
//                         justifyContent: 'center',
//                         display: 'flex',
//                     }}
//                 />
//             </Grid>

//             <Grid item xs={8} sx={{ border: 1, color: 'red' }}>
//                 <Container sx={{ border: 1, color: 'orange' }}>
//                     <Typography gutterBottom variant="h5" component="div" sx={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                     }}>
//                         $45000
//                     </Typography>
//                 </Container>
//                 <CardContent>
//                     <Grid container sx={{ border: 1 }}>
//                         <Grid item xs={12} md={6} sx={{ border: 1 }}>
//                             <Grid container>
//                                 <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         TOWN
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography variant="body1" component="div">
//                                         lol
//                                     </Typography>
//                                 </Grid>

//                                 <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         STREET
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography variant="body1" component="div">
//                                         SIMS DR
//                                     </Typography>
//                                 </Grid>

//                                 <Grid item xs={4} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         LEASE COMMENCE
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={8} marginBottom={2} sx={{ border: 1, color: 'blue' }}>
//                                     <Typography variant="body1" component="div">
//                                         2012
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Grid>


//                         <Grid item xs={12} md={6} marginBottom={1} sx={{ border: 1, color: 'green' }}>
//                             <Grid container>
//                                 <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         FLAT TYPE
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography variant="body1" component="div">
//                                         3 ROOM
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         FLAT MODEL
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography variant="body1" component="div">
//                                         Improved
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={5} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography
//                                         variant="body1"
//                                         color="text.secondary"
//                                         component="div"
//                                     >
//                                         AREA
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={7} marginBottom={2} sx={{ border: 1, color: 'green' }}>
//                                     <Typography variant="body1" component="div">
//                                         69
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//             </Grid>
//             <Container>
//                 <Typography>
//                     map goes here
//                 </Typography>
//             </Container>
//         </Grid>
//     </Card >
// );