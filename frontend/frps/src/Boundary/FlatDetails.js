import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, CardContent, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';

import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import Flat from '../Entity/Flat';
import images from '../Control/ImageController';
import { getOneFlat } from '../Control/DatabaseController';


var center = { lat: 1.3, lng: 106 };

const imageRNG = (flatID) => {
    const lastChar = flatID.charAt(flatID.length - 1);
    const lastCharInt = lastChar.charCodeAt(0) % 20;
    return images[lastCharInt];

}

export const MapToolbar = () => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
        >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
            >
                Map
            </Typography>

        </Box>
    );
}


const FlatDetails = () => {

    // might be able to decouple into another js file, maybe IndividualFlatController
    const { flatID } = useParams();
    const [loading, setLoading] = useState(true);
    const [flat, setFlat] = useState([]);

    let history = useHistory();


    useEffect(() => {
        console.log("fetching oneFlat..");
        (async () => {
            try {
                const oneFlat = await getOneFlat(flatID);
                let results;
                if (oneFlat.data() == null) {
                    setLoading(false);
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
                    center = coor(oneFlat.data().town);
                    console.log(center);
                }
            } catch (err) {
                console.log("ERROR:" + err);
            }

        })();
    });

    useLoadScript({
        // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        googleMapsApiKey: "AIzaSyBVeTU6-9MHWZ92vZJ2CFRgYDJNsuLzobw"
    })

    const towns = [
        "ANG MO KIO",
        "BEDOK",
        "BISHAN",
        "BUKIT BATOK",
        "BUKIT MERAH",
        "BUKIT PANJANG",
        "BUKIT TIMAH",
        "CENTRAL AREA",
        "CHOA CHU KANG",
        "CLEMENTI",
        "GEYLANG",
        "HOUGANG",
        "JURONG EAST",
        "JURONG WEST",
        "KALLANG/WHAMPOA",
        "LIM CHU KANG",
        "MARINA PARADE",
        "PASIR RIS",
        "PUNGGOL",
        "QUEENSTOWN",
        "SEMBAWANG",
        "SENGKANG",
        "SERANGOON",
        "TAMPINES",
        "TOA PAYOH",
        "WOODLANDS",
        "YISHUN"
    ]
    const coordinates = [
        { lat: 1.3691, long: 103.8454 },
        { lat: 1.3236, long: 103.9273 },
        { lat: 1.3526, long: 103.8352 },
        { lat: 1.3590, long: 103.7637 },
        { lat: 1.2819, long: 103.8239 },
        { lat: 1.3774, long: 103.7719 },
        { lat: 1.3294, long: 103.8021 },
        { lat: 1.2789, long: 103.8536 },
        { lat: 1.3840, long: 103.7470 },
        { lat: 1.3162, long: 103.7649 },
        { lat: 1.3201, long: 103.8918 },
        { lat: 1.3612, long: 103.8863 },
        { lat: 1.3329, long: 103.7436 },
        { lat: 1.3404, long: 103.7090 },
        { lat: 1.3245, long: 103.8572 },
        { lat: 1.4305, long: 103.7173 },
        { lat: 1.3020, long: 103.8971 },
        { lat: 1.3721, long: 103.9474 },
        { lat: 1.3984, long: 103.9072 },
        { lat: 1.2942, long: 103.7861 },
        { lat: 1.4491, long: 103.8185 },
        { lat: 1.3868, long: 103.8914 },
        { lat: 1.3554, long: 103.8679 },
        { lat: 1.3496, long: 103.9568 },
        { lat: 1.3343, long: 103.8563 },
        { lat: 1.4382, long: 103.7890 },
        { lat: 1.4304, long: 103.8354 }
    ]

    function coor(address) {
        for (var j = 0; j < 26; j++) {
            if (address === towns[j]) {
                const { lat, long } = coordinates[j];
                const center = { lat: lat, lng: long };
                console.log(center)
                return center;
            }
        }
    }


    return (
        <>
            <Container sx={{ my: '30px' }}>
                <Button startIcon={<ArrowBackIcon fontSize="small" />} onClick={() => {
                    history.goBack()
                }} >
                    Back
                </Button>

                {loading && <Container sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}><CircularProgress /></Container>}
                {!loading &&

                    <Card sx={{
                        mt: '20px',
                        // minHeight: 500,
                        maxHeight: 500,
                        borderRadius: '20px',
                        padding: '4rem',
                        display: 'flex',
                        ':hover': {
                            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                        },
                    }}>

                        <Grid container spacing={2} columns={12} sx={{ border: 0, minHeight: '100px', maxHeight: '600px' }}>

                            <Grid item xs={4} sx={{ border: 0 }} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={imageRNG(flat.flatID)}
                                    sx={{
                                        objectFit: "contain",
                                        mt: '30px',
                                        backgroundPosition: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                    }}
                                />
                            </Grid>

                            <Grid item xs={8} sx={{ border: 0 }}>
                                <Container sx={{ border: 0 }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        fontWeight: 'bold',
                                    }}>
                                        ${flat.getPrice()}
                                    </Typography>
                                </Container>
                                <CardContent>
                                    <Grid container sx={{ border: 0 }}>
                                        <Grid item xs={12} md={6} sx={{ border: 0 }}>
                                            <Grid container>
                                                <Grid item xs={4} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        TOWN
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getTown()}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={4} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        STREET
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getStreetName()}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={4} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        LEASE COMMENCE
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getLeaseCommenceDate()}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={4} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        FLOOR
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getStoreyRange()}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>


                                        <Grid item xs={12} md={6} marginBottom={1} sx={{ border: 0 }}>
                                            <Grid container>
                                                <Grid item xs={5} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        FLAT TYPE
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={7} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getFlatType()}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        FLAT MODEL
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={7} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getFlatModel()}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={5} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        FLOOR AREA
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={7} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getFloorAreaSqm()} sqm
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        component="div"
                                                    >
                                                        BLOCK
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={7} marginBottom={2} sx={{ border: 0 }}>
                                                    <Typography variant="body1" component="div">
                                                        {flat.getBlock()}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card >
                }
            </Container>

            {/* map stuff */}

            {!loading &&
                <Container>
                    <MapToolbar />
                    <Card sx={{
                        mt: '20px',
                        // minHeight: 500,
                        // maxHeight: 500,
                        borderRadius: '20px',
                        padding: '4rem',
                        display: 'flex',
                        ':hover': {
                            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                        },
                    }}>
                        <GoogleMap
                            zoom={13}
                            center={center}
                            mapContainerStyle={{ width: "100%", height: "50vh" }}
                        >
                            <MarkerF position={center} />
                        </GoogleMap>
                    </Card>
                </Container>
            }
        </>
    );

}


export default FlatDetails;