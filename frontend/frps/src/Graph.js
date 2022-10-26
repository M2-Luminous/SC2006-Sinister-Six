import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, {PureComponent} from 'react';
//import MenuItem from '@mui/material/MenuItem';
//import {Filter} from './Boundary/Filter';
import {getGraphFlat} from './Control/DatabaseController.js';
import {Container, Typography, Slider} from '@mui/material';
import { useEffect, useState } from 'react';
import { date } from 'yup';

const GraphFunction = (Filters) => {
  //const townName = Filters['townName'];
  const townName = 'QUEENSTOWN';
  //const noOfRooms = Filters['noOfRooms'];
  const flatType = '4 ROOM';
  //const floorArea = Filters['floorArea'];
  const floorArea = 100;
  //const flatModel = Filters['flatModel'];
  const flatModel = 'MODEL A';
  //let leaseStartDate = Filters['leaseStartDate'];
  let leaseStartDate = 2015;
  //const floor = Filters['floor'];
  const floor = '29';

  //let graphFlats = new Array();         //array of flats to be graphed
  //let predictedData = new Array();      //array of predicted data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let graphFlats = [];         //array of flats to be graphed
  let predictedData = [];      //array of predicted data
  let testPrice = []           //array of 5 resale prices
  
  let variables;
  let extra = 0;
  let year = new Date().getFullYear();
  let stringVariables;
  useEffect(() => {
    (async () => {
      try {
  for(let x = 0; x < 5; x++) {
    let temp = await getGraphFlat(townName, (leaseStartDate -+ (x + extra)), flatType, flatModel, floorArea);
    if(temp['docs'].length == 0)
    {
      extra++;
      x--;
      continue;
    }
    //console.log(temp['docs'][0].data());
    graphFlats.push(temp['docs'][0].data()); //historic data
    variables = {
      townName: townName,
      noOfRooms: flatType,
      floor: floor,
      floorArea: floorArea,
      flatModel: flatModel,
      leaseStartDate: year + x
      
      }
    console.log(graphFlats[x]);
    //testPrice.push(graphFlats['data'].resale_price(variables));

    stringVariables = JSON.stringify(variables);    //this is to get predicted resalePrice from backend
    fetch('https://sc2006-backend-b3go.onrender.com/filterReq', {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: stringVariables
    })
    .then(response => response.json())
    .then(data => {
      predictedData.push(data['data']);     //predicted data will be storing in this array
      console.log(data['data']);
    });
    
  }
  } catch (err) {
    console.log("ERROR:" + err);
  }
  setLoading(false);
  })();
}, []);

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
    <>
    {!loading &&
    <Container>
      <Typography id="range-slider" gutterBottom>
        Resale Price Prediction
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
    </Container> }
    </>
 );
  }

 
export default GraphFunction;
