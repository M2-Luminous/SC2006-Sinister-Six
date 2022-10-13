import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import { FormControl, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import { compose } from '@mui/system';


const Filter = () => {

    // const processFilter = (name,) => {

    // };

    const [townName, setTownName] = useState('');
    const [noOfRooms, setNoOfRooms] = useState('');
    const [floor, setFloor] = useState('');
    const [floorArea, setFloorArea] = useState('');
    const [flatModel, setFlatModel] = useState('');
    const [leaseStartDate, setLeaseStartDate] = useState('');

    const handleChange = (event) => {
        setTownName(event.target.value);
        console.log("lol");
        console.log(event);
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
                        value={townName}
                        label="Town Name"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: "75%", mb: 3 }}>
                    <InputLabel id="noOfRooms-select-label">Number of Rooms</InputLabel>
                    <Select
                        labelId="noOfRooms-select-label"
                        id="noOfRooms-select"
                        value={noOfRooms}
                        label="noOfRooms"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: "75%", mb: 3 }}>
                    <InputLabel id="floor-select-label">Floor</InputLabel>
                    <Select
                        labelId="floor-select-label"
                        id="floor-select"
                        value={floor}
                        label="floor"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: "75%", mb: 3 }}>
                    <TextField
                        id="floorArea-input"
                        label="Floor Area"
                        value={floorArea}
                        onChange={handleChange}

                    />
                </FormControl>

                <FormControl sx={{ width: "75%", mb: 3 }}>
                    <InputLabel id="flatModel-select-label">Flat Model</InputLabel>
                    <Select
                        labelId="flatModel-select-label"
                        id="flatModel-select"
                        value={flatModel}
                        label="flatModel"
                        onChange={handleChange}
                        helperText="Please select your flat model"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: "75%", mb: 3 }}>
                    <InputLabel id="leaseStartDate-select-label">Least Start Date</InputLabel>
                    <Select
                        labelId="leaseStartDate-select-label"
                        id="leaseStartDate-select"
                        value={leaseStartDate}
                        label="leaseStartDate"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            </CardContent>




            <CardActions>
                <Button size="small" variant="contained">Filter</Button>
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

