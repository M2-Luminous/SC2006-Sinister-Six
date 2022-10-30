import React from 'react';
//import MenuItem from '@mui/material/MenuItem';
//import {Filter} from './Boundary/Filter';
import { getGraphFlat } from './Control/DatabaseController.js';
import { Container, Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { JSCharting } from 'jscharting-react';

export const GraphFunction = (filters) => {

  // const townName = filters['town'];
  // const flatType = filters['flatType'];
  // const floorArea = filters['floorAreaSqm'];
  // const flatModel = filters['flatModel'];
  // let leaseStartDate = filters['leaseCommenceDate'];
  // const floor = filters['storeyRange'];

  //const townName = 'QUEENSTOWN';
  //const flatType = '4 ROOM';
  //const floorArea = 100;
  //const flatModel = 'MODEL A';
  //let leaseStartDate = 2015;
  //const floor = '29';

  

  /*useEffect(() => {
    (async () => {
      try {
        for (let x = 0; x < 10; x++) {
          let temp = await getGraphFlat(townName, (leaseStartDate - + (x + extra)), flatType, flatModel, floorArea);
          //let [leaseS, price] = await getGraphFlat2(townName, (leaseStartDate -+ (x + extra)), flatType);

          if (temp['docs'].length == 0) {
            extra++;
            x--;
            continue;
          }
          //console.log(temp['docs'][0].data());
          graphFlats.push(temp['docs'][0].data()); //historic data

          displayYear.push(temp['docs'][0].data().lease_commence_date);
          testPrice.push(temp['docs'][0].data().resale_price);
          predictedYear.push((2022 + x));

          variables = {
            townName: townName,
            noOfRooms: flatType,
            floor: floor,
            floorArea: floorArea,
            flatModel: flatModel,
            leaseStartDate: year + x
          }
          console.log(graphFlats[x]);

          /*stringVariables = JSON.stringify(variables);    //this is to get predicted resalePrice from backend
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
      }*/
let config;
console.log("Calling getGraph");
// async () => {
// let prom = new Promise(function(resolve, reject){
  
// })
// config = await prom;
// }
GetGraph(filters['filters']).then(data => config = data);
console.log("Exit getGraph");

  const divStyle = {
    width: '60%',
    height: '100%',
    // height: '999px',
  };

  /*const [value, setValue] = React.useState([0, 10]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/
  console.log("Return graph Container");
//   return ( 
//     <Container>
//       <JSCharting options={config} />
//     </Container> 
//  );
return config;
}

async function GetGraph(filters) {
  let graphFlats = [];         //array of flats to be graphed
  let variables;
  let stringVariables;

  let extra = 0;
  let year = new Date().getFullYear();
  let check = 0;
  let foundYear = 1975;
  let config, points;

  let displayYear = [];       //array of years to be displayed
  let testPrice = [];         //array of prices to be displayed
  let predictedYear = [];     //array of predicted years to be displayed
  let predictedData = [];      //array of predicted price to be displayed
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  //const [points, setPoints] = useState([]);
  //const [points2,setPoints2] = useState([]);
  //const [config, setConfig] = useState();
  // const townName = filters['town'];
  // const flatType = filters['flatType'];
  // const floorArea = filters['floorAreaSqm'];
  // const flatModel = filters['flatModel'];
  // let leaseStartDate = filters['leaseCommenceDate'];
  // const floor = filters['storeyRange'];
  const townName = 'QUEENSTOWN';
  const flatType = '4 ROOM';
  const floorArea = 100;
  const flatModel = 'MODEL A';
  let leaseStartDate = 2000;
  const floor = '29';

  try {
    for (let x = 0; graphFlats.length < 5; x++) {
      console.log("Calling getGraphFlat " + (leaseStartDate - (x + extra)) + " " + townName + " " +flatType + " " + x);
      let temp = await getGraphFlat(townName, (leaseStartDate - (x + extra)), flatType, flatModel, floorArea);
      //let [leaseS, price] = await getGraphFlat2(townName, (leaseStartDate -+ (x + extra)), flatType);

      if (temp['docs'].length == 0) {
        console.log(x + " array Length: " + graphFlats.length);
        if((leaseStartDate - (x + extra)) < foundYear)
        {
          if(check == 0)
          {
            break;
          }
          extra -= 40;
          console.log("No data found");
          check = 1;
        }
        continue;
      }
      else
      {
        foundYear = (leaseStartDate - (x + extra))
      }
      //console.log(temp['docs'][0].data());
      graphFlats.push(temp['docs'][0].data()); //historic data

      displayYear.push(temp['docs'][0].data().lease_commence_date);
      testPrice.push(temp['docs'][0].data().resale_price);
      predictedYear.push((2022 + x));

      /*variables = {
        townName: townName,
        noOfRooms: flatType,
        floor: floor,
        floorArea: floorArea,
        flatModel: flatModel,
        leaseStartDate: year + x
      }*/
      console.log(graphFlats[graphFlats.length-1]);
    }
//const mergeResult = array1.concat(array2);
displayYear.reverse();
testPrice.reverse();
//let mergeYear = displayYear.concat(predictedYear);
//let mergePrice = testPrice.concat(predictedData);
let mergeYear = displayYear;
let mergePrice = testPrice;

// if(mergeYear.length <= 5)

// for (let i = 0; i < mergeYear.length; i++) {
//   if (i < mergeYear.length / 2) {
//     mergeYear[i] = mergeYear[i + Math.ceil(mergeYear.length / 2)];
//   }
//   else {
//     mergeYear[i] = year + (i % 5);
//   }

for(let i = 0; i < mergeYear.length; i++)
{

}

//console.log(typeof mergePrice[0]);
//console.log(typeof mergePrice[5]);

//console.log(mergePrice[0], mergePrice[5]);
//console.log(mergeYear[0], mergeYear[5]);
//console.log(predictedData);

for (let i = 0; i < mergeYear.length; i++) {
  //let newPoint = [xAxisVariable, predictedData[i]];
  let newPoint = [mergeYear[i], mergePrice[i]];
  points = (points) => [...points, newPoint];
}

// for (let i = 0; i < predictedYear.length; i++) {
//   //let newPoint = [xAxisVariable, predictedData[i]];
//   let newPoint2 = [predictedYear[i], predictedData[i]];
//   setPoints2((points2) => [...points2, newPoint2]);
//   }
//console.log(points);

//setLoading(false);
//   })();
// }, []);
}
catch (err) {
console.log("ERROR:" + err);
}
config = {
  debug: true,
  type: "line",
  height: 500,
  xAxis: {
    label_text: "Year",
    scale_interval: 1,
    scale_type: "linear",
    //scale_breaks: [[2016, 2021]]
    scale: { breaks: [[leaseStartDate + 1, year - 1]] },
  },
  yAxis: {
    label_text: "Price",
    scale_type: "linear",
  },

  series: [
    {
      name: "Price",
      points: points,
    },

    // {
    //   name : "Predicted price",
    //   points: points2,
    //   },
  ]
}
console.log("Returning from getGraph");
return await config;
}



//export default GraphFunction;