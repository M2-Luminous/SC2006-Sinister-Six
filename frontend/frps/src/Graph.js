import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, {PureComponent} from 'react';
//import MenuItem from '@mui/material/MenuItem';
//import {Filter} from './Boundary/Filter';
import {getGraphFlat, getGraphFlat2} from './Control/DatabaseController.js';
import {Container, Typography, Slider} from '@mui/material';
import { useEffect, useState } from 'react';
import { date } from 'yup';
import {JSCharting} from 'jscharting-react';

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [points,setPoints] = useState([]);

  let graphFlats = [];         //array of flats to be graphed
  let predictedData = [];      //array of predicted data
  
  let variables;
  let extra = 0;
  let year = new Date().getFullYear();
  let stringVariables;

  let displayYear = [];
  let testPrice = [];
  let predictedYear = [];

  useEffect(() => {
    (async () => {
      try {
  for(let x = 0; x < 5; x++) {
    let temp = await getGraphFlat(townName, (leaseStartDate -+ (x + extra)), flatType, flatModel, floorArea);
    //let [leaseS, price] = await getGraphFlat2(townName, (leaseStartDate -+ (x + extra)), flatType);

    if(temp['docs'].length == 0)
    {
      extra++;
      x--;
      continue;
    }
    //console.log(temp['docs'][0].data());
    graphFlats.push(temp['docs'][0].data()); //historic data
    displayYear.push(temp['docs'][0].data().lease_commence_date);
    testPrice.push(temp['docs'][0].data().resale_price);
    predictedYear.push(year + x);

    variables = {
      townName: townName,
      noOfRooms: flatType,
      floor: floor,
      floorArea: floorArea,
      flatModel: flatModel,
      leaseStartDate: year + x
      }
    console.log(graphFlats[x]);

    stringVariables = JSON.stringify(variables);    //this is to get predicted resalePrice from backend
    fetch('https://sc2006-backend-b3go.onrender.com/filterReq', {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: stringVariables
    })
    .then(response => response.json())
    .then(data => {
      console.log(data['data']);
      predictedData.push(data['data']);     //predicted data will be storing in this array
    });
    
    
  }
  } catch (err) {
    console.log("ERROR:" + err);
  }

  //const mergeResult = array1.concat(array2);
  const mergeYear = displayYear.concat(predictedYear);
  const mergePrice = testPrice.concat(predictedData);
  
  console.log(mergeYear);
  console.log(mergePrice);
  console.log(predictedData);

  for (let i = 0; i < mergeYear.length-1; i++) {
  //let newPoint = [xAxisVariable, predictedData[i]];
  let newPoint = [mergeYear[i], mergePrice[i]];
  setPoints((points) => [...points, newPoint]);
  }

  setLoading(false);
  })();
}, []);

const config= {
  debug: true,
  type:"line",
  xAxis:{
    label_text: "Year",
  },
  yAxis: {
    label_text: "Price",
  },

  series : [
    {
    name : "Price",
    points: points
}]
};

const divStyle = {
width: '50%',
height: '50%',
};

const [value, setValue] = React.useState([0, 10]);
const handleChange = (event, newValue) => {
  setValue(newValue);
};

return ( 
  <Container>
    <Typography id="range-slider" gutterBottom>
      Resale Price Prediction
    </Typography>
    
    <ResponsiveContainer width="100%" height={400}>
      <div style = {{divStyle}}>
        <JSCharting options={config}/>
      </div>
    </ResponsiveContainer>
  </Container>
);
}
  
export default GraphFunction;