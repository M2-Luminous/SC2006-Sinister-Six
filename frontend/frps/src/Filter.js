import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { FormControl, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';

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

const Filter = () => {

    const [filter, setFilter] = useState({
        townName: '',
        noOfRooms: '',
        floor: '',
        floorArea: '',
        flatModel: '',
        leaseStartDate: ''
    });

    const test = () => {
        console.log("STRINGYFYING");
        console.log(JSON.stringify(filter));
        // console.log(filter);

        // fetch from server


    }


    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
        console.log("lol");
        console.log(filter);
        console.log("updatedValue:" + filter.townName);
    }

    return (

        <Card sx={{ mt: 2, width: '95%', ml: "auto", mr: "auto" }} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Filter
                </Typography>
            </CardContent>

            <CardContent>

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

                <FormControl sx={{ width: "75%", mb: 3 }}>
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

            <CardActions>
                <Button size="small" onClick={test} variant="contained">test</Button>

                <Button size="small" variant="contained" >Filter</Button>
            </CardActions>
        </Card >

    );
}

export default Filter;

// <Card sx={{ mt: 2, width: '95%', ml: "auto", mr: "auto" }} >
// <CardContent>
//     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Filter
//     </Typography>
// </CardContent>

// <Grid container>
//     <Grid item xs={6}>
//         <CardContent>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Town name:
//             </Typography>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Number of rooms:
//             </Typography>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Floor:
//             </Typography>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Floor area:
//             </Typography>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Flat model:
//             </Typography>

//             <Typography variant="p" component="div" sx={{ mb: 2 }}>
//                 Lease commence date:
//             </Typography>
//         </CardContent>
//     </Grid>

//     <Grid item xs={6}>
//         <CardContent>
//             <FormControl fullWidth>
//                 <InputLabel id="town-select-label">Age</InputLabel>
//                 <Select
//                     labelId="town-select-label"
//                     id="town-select"
//                     value={townName}
//                     label="Town Name"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//         </CardContent>
//     </Grid>

//     <CardActions>
//         <Button size="small" variant="contained">Filter</Button>
//     </CardActions>

// </Grid >
// </Card >

