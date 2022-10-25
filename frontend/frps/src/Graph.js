import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, {PureComponent} from 'react';
//import MenuItem from '@mui/material/MenuItem';
//import {Filter} from './Boundary/Filter';
import {getGraphFlat} from './Control/DatabaseController.js';
import {Container, Typography, Slider} from '@mui/material';

const GraphFunction = (Filters) => {
  //const townName = Filters['townName'];
  const townName = 'ANG MO KIO';
  //const noOfRooms = Filters['noOfRooms'];
  const noOfRooms = '5 ROOM';
  //const floor = Filters['floor'];
  const floor = 6;
  //const floorArea = Filters['floorArea'];
  const floorArea = 100;
  //const flatModel = Filters['flatModel'];
  const flatModel = 'New Generation';
  //let leaseStartDate = Filters['leaseStartDate'];
  let leaseStartDate = 1980;

  //let graphFlats = new Array();         //array of flats to be graphed
  //let predictedData = new Array();      //array of predicted data

  let graphFlats = [];         //array of flats to be graphed
  let predictedData = [];      //array of predicted data
  let testPrice = []           //array of 5 resale prices
  
  for(let x = 0; x < 5; x++) {
    graphFlats.push(getGraphFlat(townName, noOfRooms, floor, floorArea, flatModel, (leaseStartDate += x))); //historic data
    let variables = {
      townName: townName,
      noOfRooms: noOfRooms,
      flatModel: flatModel,
      leaseStartDate: leaseStartDate,
      floor: floor,
      floorArea: floorArea
      }
    
    //testPrice.push(graphFlats['data'].resale_price(variables));

    let stringVariables = JSON.stringify(variables);    //this is to get predicted resalePrice from backend
    fetch('https://sc2006-backend-b3go.onrender.com/filterReq', {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: stringVariables
    })
    .then(response => response.json())
    .then(data => {
      predictedData.push(data['data']);                 //predicted data will be storing in this array
    });
  }

  const dataa = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const [value, setValue] = React.useState([0, 10]);
const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return ( 
    <div>
      <Typography id="range-slider" gutterBottom>
        Lease Start Date
      </Typography>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={dataa}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray= "3 3" />
          <XAxis dataKey= "name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
 );
}
 
export default GraphFunction;
