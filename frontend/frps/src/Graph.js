import React from 'react';
//import MenuItem from '@mui/material/MenuItem';
//import {Filter} from './Boundary/Filter';
import { getGraphFlat } from './Control/DatabaseController.js';
import { Container, Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { JSCharting } from 'jscharting-react';

const GraphFunction = (Filters) => {
  //const townName = Filters['townName'];
  //const flatType = Filters['noOfRooms'];
  //const floorArea = Filters['floorArea'];
  //const flatModel = Filters['flatModel'];
  //let leaseStartDate = Filters['leaseStartDate'];
  //const floor = Filters['floor'];

  const townName = 'QUEENSTOWN';
  const flatType = '4 ROOM';
  const floorArea = 100;
  const flatModel = 'MODEL A';
  let leaseStartDate = 2015;
  const floor = '29';

  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  const [points, setPoints] = useState([]);
  //const [points2,setPoints2] = useState([]);

  let graphFlats = [];         //array of flats to be graphed
  let variables;
  let stringVariables;

  let extra = 0;
  let year = new Date().getFullYear();

  let displayYear = [];       //array of years to be displayed
  let testPrice = [];         //array of prices to be displayed
  let predictedYear = [];     //array of predicted years to be displayed
  let predictedData = [];      //array of predicted price to be displayed

  useEffect(() => {
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
          });*/

        }
      } catch (err) {
        console.log("ERROR:" + err);
      }

      //const mergeResult = array1.concat(array2);
      displayYear.reverse();
      testPrice.reverse();
      //let mergeYear = displayYear.concat(predictedYear);
      //let mergePrice = testPrice.concat(predictedData);
      let mergeYear = displayYear;
      let mergePrice = testPrice;

      for (let i = 0; i < 10; i++) {
        if (i < 5) {
          mergeYear[i] = mergeYear[i + 5];
        }
        else {
          mergeYear[i] = year + (i % 5);
        }

      }
      //console.log(typeof mergePrice[0]);
      //console.log(typeof mergePrice[5]);

      //console.log(mergePrice[0], mergePrice[5]);
      //console.log(mergeYear[0], mergeYear[5]);
      //console.log(predictedData);

      for (let i = 0; i < mergeYear.length; i++) {
        //let newPoint = [xAxisVariable, predictedData[i]];
        let newPoint = [mergeYear[i], mergePrice[i]];
        setPoints((points) => [...points, newPoint]);
      }

      // for (let i = 0; i < predictedYear.length; i++) {
      //   //let newPoint = [xAxisVariable, predictedData[i]];
      //   let newPoint2 = [predictedYear[i], predictedData[i]];
      //   setPoints2((points2) => [...points2, newPoint2]);
      //   }
      //console.log(points);

      setLoading(false);
    })();
  }, []);

  const config = {
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
  };

  const divStyle = {
    width: '60%',
    height: '100%',
    // height: '999px',
  };

  const [value, setValue] = React.useState([0, 10]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div style={{ divStyle }}>
        <JSCharting options={config} />
      </div>
    </Container>
  );
}

export default GraphFunction;