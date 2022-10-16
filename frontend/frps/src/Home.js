import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';
import HeroCard from './Boundary/UIElements/HeroCard';
import HouseCards from './Boundary/UIElements/HouseCards';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import FlatDetails from './Boundary/FlatDetails';
import { getFlats } from './Controller/DatabaseController';
import Flat from "./Entity/Flat";



const Home = () => {
    // const [flats, setFlats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flatList, setList] = useState([]);

    useEffect(() => {
        console.log("fetching..");
        (async () => {
            try {
                const flats = await getFlats();
                setList(
                    flats.docs.map(
                        (doc) =>
                            new Flat(
                                doc.id,
                                doc.data().block,
                                doc.data().flat_model,
                                doc.data().flat_type,
                                doc.data().floor_area_sqm,
                                doc.data().lease_commence_date,
                                doc.data().month,
                                doc.data().resale_price,
                                doc.data().storey_range,
                                doc.data().street_name,
                                doc.data().town
                            )
                    )
                );
                console.log("loaded");
                console.log(flats);
                setLoading(false);
            } catch (err) {
                console.log("Error occured when fetching games" + err);
            }

        })();
    }, []);

    const handleChange = (event) => {
        console.log("lol");
    }


    return (
        <Container>
            <HeroCard />
            <div style={{ marginBottom: "10px", marginTop: "50px" }}>
                <Typography variant="overline" style={{ color: "#9e998b" }}>
                    Find your perfect home
                </Typography>
            </div>

            <Box
                sx={{ display: "flex", justifyContent: "", marginTop: "60px" }}
            >
                <FormControl sx={{}}>
                    <InputLabel id="floor-select-label">Number of Items</InputLabel>
                    <Select
                        labelId="floor-select-label"
                        id="floor-select"
                        value="adsf"
                        label="Number of Items"
                        onChange={handleChange}
                        name="floor"
                    >
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                        <MenuItem value={"5"}>5</MenuItem>


                    </Select>
                </FormControl>
            </Box>


            {loading && <Typography variant="body1" color="initial" sx="justifyContent: 'center', justifyText: 'center' ">Loading...</Typography>}
            {!loading && <HouseCards flats={flatList} />}

            <Box
                sx={{ display: "flex", justifyContent: "center", mt: "60px", mb: "60px" }}
            >
                <Button
                    component={Link}
                    to={`./explore`}
                    variant="contained"
                    size="large"
                    style={{ minWidth: "80px", minHeight: "30px" }}
                // endIcon={<NavigateNextIcon />}
                >
                    View more
                </Button>
            </Box>


        </Container >
    );
}

export default Home;