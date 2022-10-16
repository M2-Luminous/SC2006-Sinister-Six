import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';
import HeroCard from './Boundary/UIElements/HeroCard';
import HouseCards from './Boundary/UIElements/HouseCards';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';


import FlatDetails from './Boundary/FlatDetails';
import { getFlats, getMoreFlats } from './Controller/DatabaseController';
import Flat from "./Entity/Flat";



const Home = () => {
    // const [flats, setFlats] = useState(null);
    // store last document
    const [lastDoc, setLastDoc] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [flatList, setList] = useState([]);
    const [sortBy, setSortBy] = useState(1);
    const [noOfItems, setnoOfItems] = useState(5);


    useEffect(() => {
        console.log("fetching..");
        setLoading(true);
        (async () => {
            try {
                const flats = await getFlats(sortBy, noOfItems);
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
                setLoading(false);
                // update latestDoc
                setLastDoc(flats.docs[flats.docs.length - 1]);
            } catch (err) {
                console.log("ERROR" + err);
            }

        })();
    }, [sortBy, noOfItems]);

    const handleViewMore = (event) => {
        event.preventDefault();
        setLoadingMore(true);
        (async () => {
            try {
                const flats = await getMoreFlats(sortBy, noOfItems, lastDoc);
                setList(
                    flatList.concat(
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
                    )
                );
                setLoadingMore(false);
                console.log(flats);
                // update latestDoc
                setLastDoc(flats.docs[flats.docs.length - 1]);
            } catch (err) {
                console.log("ERROR" + err);
            }

        })();
    }

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    }

    const handleNoItemsChange = (event) => {
        setnoOfItems(event.target.value);
    }

    return (
        <Container>
            <HeroCard />
            <div style={{ marginBottom: "10px", marginTop: "50px" }}>
                <Typography variant="overline" style={{ color: "#9e998b" }}>
                    Find your perfect home
                </Typography>
            </div>

            <Box sx={{
                border: 0,
            }}>
                <Stack direction={{ sm: "column", md: "row" }}
                    spacing={{ xs: 3, sm: 5, md: 2 }}
                    sx={{
                        // mr: 3,
                        // justifyContent: "space-evenly",
                        justifyContent: "flex-start",
                        // py: 3,
                        // paddingLeft: "1rem",
                        // paddingRight: "1rem",
                    }}>
                    <Box width={{ xs: "100%", md: "30%" }}>
                        <FormControl>
                            <InputLabel id="sort-by-select-label">Sort by</InputLabel>
                            <Select labelId="sort-by-select-label" id="sort-by-select" value={sortBy} label="Sort by" onChange={handleSortByChange}>
                                <MenuItem value={1}>Price (Low to High)</MenuItem>
                                <MenuItem value={2}>Price (High to Low)</MenuItem>
                                <MenuItem value={3}>Lease Date (Newest to Oldest)</MenuItem>
                                <MenuItem value={4}>Lease Date (Oldest to Newest)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box width={{ xs: "100%", md: "30%" }}>
                        <FormControl sx={{ width: '7rem' }}>
                            <InputLabel id="no-of-items-label">No Of Items</InputLabel>
                            <Select labelId="no-of-items-label" id="no-of-items" value={noOfItems} label="No Of Items" onChange={handleNoItemsChange}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
            </Box>



            {loading &&
                <Container sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}><CircularProgress /></Container>}

            {!loading && <HouseCards flats={flatList} />}

            <Box
                sx={{ display: "flex", justifyContent: "center", mt: "60px", mb: "60px" }}
            >
                <Button
                    variant="contained"
                    size="medium"
                    style={{ minWidth: "80px", minHeight: "30px" }}
                    onClick={handleViewMore}
                    startIcon={
                        loadingMore ? <CircularProgress size={20} color="secondary" /> : <AddIcon />}
                >
                    View More
                </Button>
            </Box>


        </Container >
    );
}

export default Home;