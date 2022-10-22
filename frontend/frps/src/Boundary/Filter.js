import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { FormControl, LinearProgress, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import { Container, Box } from '@mui/system';

import Flat from '../Entity/Flat';
import { getFilteredFlats } from '../Control/DatabaseController';
import HouseCards from './UIElements/HouseCards';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';


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
                Filter
            </Typography>
            {/* <Box sx={{ m: 1 }}>
                <Button
                    startIcon={(<UploadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}
                >
                    Import
                </Button>
                <Button
                    startIcon={(<DownloadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}
                >
                    Export
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Add Customers
                </Button>
            </Box> */}
        </Box>
    );
}

export const FilterResultsToolbar = ({ resultLength }) => {
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
                Results {resultLength}
            </Typography>
            {/* <Box sx={{ m: 1 }}>
                <Button
                    startIcon={(<UploadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}  
                >
                    Import
                </Button>
                <Button
                    startIcon={(<DownloadIcon fontSize="small" />)}
                    sx={{ mr: 1 }}
                >
                    Export
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Add Customers
                </Button>
            </Box> */}
        </Box>
    );
}


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
    const [justEntered, setJustEntered] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [resultLength, setResultLength] = useState(0);

    const test = () => {
        console.log("STRINGYFYING");
        console.log(JSON.stringify(filter));
        // console.log(filter);

        // fetch from server
        const stringFilter = JSON.stringify(filter);
        const response = fetch('https://sinistersix-a7294.web.app:3001/filterReq', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: stringFilter
        })
            .then(response => response.json())
            .then(data => {
                // let price = data;
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
        console.log("lol");
        console.log(filter);
        console.log("updatedValue:" + filter.townName);
    }

    const handleFilter = (event) => {

        setIsLoading(true);
        setFlatList({});
        (async () => {
            try {
                let flats = await getFilteredFlats(filter.townName, filter.noOfRooms);
                setFlatList(
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

                setIsLoading(false);
                // setResultLength(flatList.length());
                console.log(flatList);

            } catch (err) {
                console.log("ERROR" + err);
            }

        })();

    }

    return (

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 3,
            }}
        >
            <Container>
                <Button
                    startIcon={<ArrowBackIcon fontSize="small" />}
                    onClick={() => {
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
                            <InputLabel id="noOfRooms-select-label">Number of Rooms</InputLabel>
                            <Select
                                labelId="noOfRooms-select-label"
                                id="noOfRooms-select"
                                name="noOfRooms"
                                value={filter.noOfRooms}
                                label="Number of Rooms"
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
                            <InputLabel id="leaseStartDate-select-label">Least Start Date</InputLabel>
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

                        <Button variant="contained" onClick={() => (
                            handleFilter()
                        )} color="secondary">Filter</Button>

                    </CardContent>
                </Card >

                <FilterResultsToolbar resultLength={resultLength} />

                <Box sx={{ pt: 3 }}>
                    {isLoading ? <LinearProgress /> : <HouseCards flats={flatList} />}

                </Box>


            </Container >
        </Box >
    );
}

export default Filter;