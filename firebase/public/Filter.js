const fs = require('fs');
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const formula = require('./formula')
let conversion;
let townData;
let dateTime;
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', }));
var allowCrossDomain = function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();  
  }
  app.use(allowCrossDomain);

//Read conversion.json
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

//set Filter
const SetFilter = (data) => {
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
            else {
                floor = averageFloor[x - 1];
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
const test = () => {
    area = 100;
    floor = 6;
    town = townData[0]['CHOA CHU KANG'];
    model = flatData[0]['New Generation'];
    roomNo = roomNoData[0]['5 ROOM'];
    leaseStartDate = 1980;
}

//get Filter
const Filter = () => {
    let filterObj = { area, floor, town, model, roomNo, leaseStartDate };
    return filterObj;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.post("/filterReq", (req, res) => { 
const rawData = req.body;
SetFilter(rawData);
console.log('Data collected ' + Filter()['area']);
res.send({data: formula(Filter())});
console.log('Data sent ' + JSON.stringify(formula(Filter())));
res.end();
});

/*app.get("/test", (req, res) => {
    const rawData = req.body;
    //res.send({price: '1'});
    res.status(200).json({price: '1'});
});*/

app.listen(5001, () => {
    console.log(`Server is running on port 3001.`);
});
