import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { CircularProgress, FormControl, LinearProgress, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import { Container, Box, Stack } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Flat from '../Entity/Flat';
import { getFilteredFlats } from '../Control/DatabaseController';
import HouseCards from './UIElements/HouseCards';



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
    "PARSIR RIS",
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

const roomNumbers = [
    "NONE",
    "1 ROOM",
    "2 ROOM",
    "3 ROOM",
    "4 ROOM",
    "5 ROOM",
    "EXECUTIVE",
    "MULTI-GENERATION"
]

const flatTypes = [
    "NONE",
    "IMPROVED-MAISONETTE",
    "STANDARD",
    "PREMIUM APARTMENT",
    "MULTI GENERATION",
    "2-ROOM",
    "Simplified",
    "IMPROVED",
    "APARTMENT",
    "MAISONETTE",
    "Adjoined flat",
    "Model A2",
    "MODEL A",
    "TERRACE",
    "New Generation",
    "3 Loft",
    "3Gen",
    "Type S1",
    "Type S2",
    "DBSS",
    "Premium 9"
]

const floorNumbers = () => {
    let floors = []
    for (let i = 1; i <= 51; i++) {
        floors.push(i)
    }
    return floors
}

const leaseDates = () => {
    let dates = []
    for (let i = 1950; i <= 2020; i++) {
        dates.push(i)
    }
    return dates
}


export const FilterToolbar = () => {
    return (
        <Box
            sx={{
                // alignItems: 'center',
                // display: 'flex',
                // justifyContent: 'space-between',
                // flexWrap: 'wrap',
                my: 3
            }}
        >
            <Typography
                variant="h4"
            >
                Filter
            </Typography>
            <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
            >
                Filter your search
            </Typography>
        </Box>
    );
}

export const FilterResultsToolbar = ({ resultLength, isLoading }) => {
    return (
        <>
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
                    Results {isLoading ? <CircularProgress color="secondary" size={20} /> : (resultLength)}
                </Typography>
            </Box>


        </>

    );
}

/**
 * This function is called when the user lands on the Filter page
 * @returns {JSX.Element} The Filter page
 */
const Filter = () => {

    const [filter, setFilter] = useState({
        townName: 'CHOA CHU KANG',
        noOfRooms: '5 ROOM',
        floor: '12',
        floorArea: '120',
        flatModel: 'MODEL A',
        leaseStartDate: '1999'
    });

    const [flatList, setFlatList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [resultLength, setResultLength] = useState(0);
    const [sortBy, setSortBy] = useState(1);

    // const test = () => {
    //     console.log("STRINGYFYING");
    //     console.log(JSON.stringify(filter));
    //     // console.log(filter);

    //     // fetch from server
    //     const stringFilter = JSON.stringify(filter);
    //     const response = fetch('https://sinistersix-a7294.web.app:3001/filterReq', {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: { "Content-type": "application/json;charset=UTF-8" },
    //         body: stringFilter
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             // let price = data;
    //             console.log(data);
    //         })
    //         .catch(err => console.log(err));
    // }

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    }

    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    }

    const handleFilter = (event) => {

        setIsLoading(true);
        setResultLength(0);
        setFlatList([]);
        (async () => {
            try {
                let flats = await getFilteredFlats(filter.townName, filter.noOfRooms, sortBy);
                setFlatList((flatList) => (
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
                    ))
                );
                setResultLength(flats.docs.length);

            } catch (err) {
                console.log("ERROR" + err);
            } finally {
                setIsLoading(false);
            }

        })();
    }


    let history = useHistory();

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                // py: 3,
            }}
        >
            <Container>
                <Button
                    startIcon={<ArrowBackIcon fontSize="small" />}
                    onClick={() => {
                        history.goBack()
                    }}
                >
                    Back
                </Button>

                <FilterToolbar />

                <Card sx={{ my: 3, p: 3 }} >
                    <CardContent>
                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <InputLabel id="town-select-label">Town Name</InputLabel>
                            <Select
                                labelId="town-select-label"
                                id="town-select"
                                value={filter.townName}
                                label="Town Name"
                                name="townName"
                                onChange={handleChange}
                            >
                                {towns.map((town) => (
                                    <MenuItem
                                        value={town}
                                    >
                                        {town}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <InputLabel id="noOfRooms-select-label">Flat Type</InputLabel>
                            <Select
                                labelId="noOfRooms-select-label"
                                id="noOfRooms-select"
                                name="noOfRooms"
                                value={filter.noOfRooms}
                                label="Flat Type"
                                onChange={handleChange}
                            >

                                {roomNumbers.map((roomNumber) => (
                                    <MenuItem value={roomNumber}>{roomNumber}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <InputLabel id="floor-select-label">Floor</InputLabel>
                            <Select
                                labelId="floor-select-label"
                                id="floor-select"
                                value={filter.floor}
                                label="floor"
                                onChange={handleChange}
                                name="floor"
                            >

                                {floorNumbers().map((floor) => {
                                    return <MenuItem value={floor}>{floor}</MenuItem>
                                })}

                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <TextField
                                id="floorArea-input"
                                label="Floor Area"
                                value={filter.floorArea}
                                input="number"
                                varient="outlined"
                                onChange={handleChange}
                                name="floorArea"

                            />

                        </FormControl>

                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <InputLabel id="flatModel-select-label">Flat Model</InputLabel>
                            <Select
                                labelId="flatModel-select-label"
                                id="flatModel-select"
                                value={filter.flatModel}
                                label="Flat Model"
                                onChange={handleChange}
                                name="flatModel"
                            >
                                {flatTypes.map((model) => (
                                    <MenuItem value={model}>{model}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%", mb: 3 }}>
                            <InputLabel id="leaseStartDate-select-label">Lease Start Date</InputLabel>
                            <Select
                                labelId="leaseStartDate-select-label"
                                id="leaseStartDate-select"
                                value={filter.leaseStartDate}
                                label="Lease Start Date"
                                onChange={handleChange}
                                name="leaseStartDate"
                            >
                                {leaseDates().map((year) => {
                                    return <MenuItem value={year}>{year}</MenuItem>
                                })}

                            </Select>
                        </FormControl>

                    </CardContent>

                    <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                setFlatList([]);
                                handleFilter();
                            }}
                        >Filter</Button>

                    </CardContent>
                </Card >

                <Box>
                    <Stack
                        direction={{ sm: "column", md: "row" }}
                        spacing={1}
                        sx={{
                            // mr: 3,
                            justifyContent: "space-between",
                            // justifyContent: "flex-end",
                            // py: 3,
                            // paddingLeft: "1rem",
                            // paddingRight: "1rem",
                        }}>

                        <FilterResultsToolbar resultLength={resultLength} isLoading={isLoading} />


                        <Stack direction="row" justifyContent={"flex-end"}>
                            <FormControl>
                                <InputLabel id="sort-by-select-label">Sort by</InputLabel>
                                <Select labelId="sort-by-select-label" id="sort-by-select" value={sortBy} label="Sort by" onChange={handleSortByChange}>
                                    <MenuItem value={1}>Price (Low to High)</MenuItem>
                                    <MenuItem value={2}>Price (High to Low)</MenuItem>
                                    <MenuItem value={3}>Lease Date (Newest to Oldest)</MenuItem>
                                    <MenuItem value={4}>Lease Date (Oldest to Newest)</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Box>

                <Box sx={{ pt: 3 }}>
                    {isLoading ? <LinearProgress /> : <HouseCards flats={flatList} />}

                </Box>


            </Container >
        </Box >
    );
}

export default Filter;