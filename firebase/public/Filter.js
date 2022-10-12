const fs = require('fs');
const formula = require('./formula')
let conversion;
let townData;
let dateTime;
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

let price = -1;
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

const Setfilter = (p, a, f, t, m, r, lsd) =>
{
    price = p;
    area = a;
    for(let x = 0; x < averageFloor.length; x++)
    {
        if(averageFloor[x] == f)
        {
            floor = averageFloor[x];
            break;
        }
        if(averageFloor[x] > f)
        {
            if(averageFloor[x] - f >= f - averageFloor[x-1])
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
    town = townData[0][t];
    model = flatData[0][m];
    roomNo = roomNoData[0][r];
    dateTime = new Date(lsd);
    //leaseStartDate = Math.floor(dateTime.getTime()/1000); //UNIX TIME: DO NOT USE
    leaseStartDate = lsd;
}

//node js testing purposes
const test = () =>
{
    price = 120000;
    area = 100;
    floor = 6;
    town = townData[0]['CHOA CHU KANG'];
    model = flatData[0]['New Generation'];
    roomNo = roomNoData[0]['5 ROOM'];
    leaseStartDate = 1980;
}


const Filter = () =>
{
    let filterObj = {price, area, floor, town, model, roomNo, leaseStartDate};
    return filterObj;
}

