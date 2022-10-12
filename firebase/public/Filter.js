const fs = require('fs');
const express = require('express');
const formula = require('./formula')
let conversion;
let townData;
let dateTime;
const app = express();

fs.readFile("./resources/data/conversion.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    conversion = JSON.parse(jsonString);
    townData = conversion.town;
    flatData = conversion.flatType;
    roomNoData = conversion.roomNumber;

    //TestProgram
    //test(); 
    //console.log(formula(Filter()));
});

let area = -1;
let floor = -1;
let town = -1;
let model = -1;
let roomNo = -1;
let leaseStartDate = 0;
const MIN_PRICE = 5000;
const MAX_PRICE = 1418000;
const MIN_FLOOR = 1;
const MAX_FLOOR = 51;
const averageFloor = [2, 3, 5, 8, 11, 13, 14, 17, 18, 20, 23, 26, 28, 29, 32, 33, 35, 38, 41, 44, 47, 50];

const SetFilter = (data) =>
{
    area = parseInt(data['floorArea']);
    floor = parseInt(data['floor']);
    for(let x = 0; x < averageFloor.length; x++)
    {
        if(averageFloor[x] == floor)
        {
            floor = averageFloor[x];
            break;
        }
        if(averageFloor[x] > floor)
        {
            if((averageFloor[x] - floor) >= (floor - averageFloor[x-1]) || x == 0)
            {
                floor = averageFloor[x];
                break;
            }
            else
            {
                floor = averageFloor[x-1];
                break;
            }

        }
    }
    town = townData[0][data['townName']];
    model = flatData[0][data['flatModel']];
    roomNo = roomNoData[0][data['noOfRooms']];
    dateTime = new Date(data['leaseStartDate']);
    //leaseStartDate = Math.floor(dateTime.getTime()/1000); //UNIX TIME: DO NOT USE
    leaseStartDate = parseInt(data['leaseStartDate']);
}

//node js testing purposes
const test = () =>
{
    area = 100;
    floor = 6;
    town = townData[0]['CHOA CHU KANG'];
    model = flatData[0]['New Generation'];
    roomNo = roomNoData[0]['5 ROOM'];
    leaseStartDate = 1980;
}


const Filter = () =>
{
    let filterObj = {area, floor, town, model, roomNo, leaseStartDate};
    return filterObj;
}


app.post("/filter", (req, res) => {
const t = req.query;
const rawData = JSON.parse(req.query['data']);
SetFilter(rawData);
console.log('Data collected');
res.send({price: formula(Filter())});
console.log('Data sent');
});

app.post("/test", (req, res) => {
    const rawData = req.body;
    res.send('Connection successful');
    });

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
  });