/*const prompt = require('prompt');

prompt.start();

prompt.get(['town_number', 'filterObj['roomNo']]',  filterObj['roomNo'], 'filterObj['floor']', 'filterObj['area']', 'filterObj['leaseStartDate']'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log('Command-line input received:');
  console.log('  town_number: ' + result.town_number);
  console.log('  filterObj['model']: ' + result.filterObj['roomNo']]);
  console.log('  filterObj['model']: ' + result filterObj['model']);
  console.log('  filterObj['floor']: ' + result.filterObj['floor']);
  console.log('  filterObj['area']: ' + result.filterObj['area']);
  console.log('  filterObj['leaseStartDate']: ' + result.filterObj['leaseStartDate']);

  if(town_number == 1){
    const result = town1(result.filterObj['roomNo']], result filterObj['model'], result.filterObj['floor'], result.filterObj['area'], result.filterObj['leaseStartDate']);
    console.log(result);
  }
  //and so on
  
});
*/

//const Filter = require('./Filter');

//let town_number = Filter['town'];
//let filterObj['model'] = Filter['model']
const formula = (filterObj) =>
{
  return (1 * 0.000126835529) + (filterObj['town'] * -1267.22925) +  (filterObj['roomNo'] * 51265.9926) + ( filterObj['model'] * -475.249476) +  (filterObj['floor'] * 4993.93695) + (filterObj['area'] * 1246.50570) +  (filterObj['leaseStartDate'] * 2993.44958) + (-6155097.82499992);
  switch(filterObj['town'])
  {
    case 0:
      return (month * 0.000126835529) + (town * -1267.22925) +  (flat_type * 51265.9926) + (flat_model * -475.249476) +  (storey_range * 4993.93695) + (floor_area_sqm * 1246.50570) +  (lease_commence_date * 2993.44958) + (-6155097.82499992);
    case 1:
      return -172418585.71 + -237464.29 * filterObj['model'] + 40792.86 * filterObj['roomNo'] + 58314.29 * filterObj['floor']+ 4464.29 * filterObj['area'] + 86935.71 * filterObj['leaseStartDate'];
    case 2:
      return -9825607.69 + -115184.62 * filterObj['model'] + 1692.31 * filterObj['roomNo'] + 8523.08 * filterObj['floor']+ 7507.69 * filterObj['area'] + 9892.31 * filterObj['leaseStartDate'];
    case 3:
      return -1850364.99 + 13285.66 * filterObj['model'] + -6717.83 * filterObj['roomNo'] + 913.57 * filterObj['floor']+ 4298.06 * filterObj['area'] + 2768.99 * filterObj['leaseStartDate'];
    case 4:
      return 2503960.00 + -27900.00 * filterObj['model'] + -3540.00 * filterObj['roomNo'] + 12083.64 * filterObj['floor'] + 4372.73 * filterObj['area'] + -5080.00 * filterObj['leaseStartDate'];
    case 5:
      return -32239588697.60 + -112045314.81 * filterObj['model'] + -155900222.21 * filterObj['roomNo'] + -159190777.77 * filterObj['floor'] + -884722.22 * filterObj['area'] + 82932481.48 * filterObj['leaseStartDate'];
    case 6:
      return 7103248.22 + 73686.57 * filterObj['model'] + 51063.15 * filterObj['roomNo'] + 114265.67 * filterObj['floor'] + 2753.16 * filterObj['area'] + -22214.24 * filterObj['leaseStartDate'];
    case 7:
      return -968214.29 + 144541.67 * filterObj['model'] + 5500.00 * filterObj['roomNo'] + 11833.33 * filterObj['floor'] + -791.67 * filterObj['area'] + 3291.67 * filterObj['leaseStartDate'];
    case 8:
      return -868679.38 + -158238.10 * filterObj['model'] + 10569.26 * filterObj['roomNo'] + 32188.31 * filterObj['floor'] + 8235.93 * filterObj['area'] + 3383.12 * filterObj['leaseStartDate'];
    case 9:
      return -1252712.38 + 153832.99 * filterObj['model'] + 5653.77 * filterObj['roomNo'] + 1264.77 * filterObj['floor'] + -2653.77 * filterObj['area'] + 5592.67 * filterObj['leaseStartDate'];
    case 10:
      return -1064590.32 + -2275290.32 * filterObj['model'] + 138258.06 * filterObj['roomNo'] + 135806.45 * filterObj['floor'] + 98064.52 * filterObj['area'] + 4000.00 * filterObj['leaseStartDate'];
    case 11:
      return -1897879.08 + 83326.03 * filterObj['model'] + -11357.53 * filterObj['roomNo'] + 2139.73 * filterObj['floor'] + -227.40 * filterObj['area'] + 10571.23 * filterObj['leaseStartDate'];
    case 12:
      return 1510416.67 + 289827.96 * filterObj['model'] + 72806.45 * filterObj['roomNo'] + 241580.65 * filterObj['floor'] + -4440.86 * filterObj['area'] + -10580.65 * filterObj['leaseStartDate'];
    case 13:
      return -865603.64 + 232522.58 * filterObj['model'] + -7812.90 * filterObj['roomNo'] + -9901.08 * filterObj['floor'] + -6010.75 * filterObj['area'] + 5713.98 * filterObj['leaseStartDate'];
    case 14:
      return -5651369.84 + 1054288.89 * filterObj['model'] + 127133.33 * filterObj['roomNo'] + 285933.33 * filterObj['floor'] + -42711.11 * filterObj['area'] + 38177.78 * filterObj['leaseStartDate'];
    case 15:
      return -720691.81 + -143502.36 * filterObj['model'] + 3883.71 * filterObj['roomNo'] + 11984.65 * filterObj['floor'] + 8891.97 * filterObj['area'] + 5425.03 * filterObj['leaseStartDate'];
    case 16:
      return 0;
    case 17:
      return 0;
    case 18:
      return -1096005.80 + 193625.90 * filterObj['model'] + 13701.44 * filterObj['roomNo'] + -37519.53 * filterObj['floor'] + -3463.00 * filterObj['area'] + 9902.88 * filterObj['leaseStartDate'];
    case 19:
      return -1348953.23 + -40107.61 * filterObj['model'] + -2398.89 * filterObj['roomNo'] + -14790.35 * filterObj['floor'] + 6721.71 * filterObj['area'] + 12823.75 * filterObj['leaseStartDate'];
    case 20:
      return -1193085.18 + 70916.01 * filterObj['model'] + -7736.17 * filterObj['roomNo'] + 9936.76 * filterObj['floor'] + 239.13 * filterObj['area'] + 12057.31 * filterObj['leaseStartDate'];
    case 21:
      return -785064.52 + -7930.74 * filterObj['model'] + 1181.82 * filterObj['roomNo'] + 10450.22 * filterObj['floor'] + 4411.26 * filterObj['area'] + 8155.84 * filterObj['leaseStartDate'];
    case 22:
      return 627081.02 + 47206.02 * filterObj['model'] + -10307.87 * filterObj['roomNo'] + 100032.41 * filterObj['floor'] + 2122.69 * filterObj['area'] + -7324.07 * filterObj['leaseStartDate'];
    case 23:
      return 1393484.55 + -240695.91 * filterObj['model'] + -5676.90 * filterObj['roomNo'] + -55859.65 * filterObj['floor'] + 14961.99 * filterObj['area'] + -15995.61 * filterObj['leaseStartDate'];
    case 24:
      return -468989.58 + -295346.15 * filterObj['model'] + -140038.46 * filterObj['roomNo'] + -227250.00 * filterObj['floor'] + 7980.77 * filterObj['area'] + 7461.54 * filterObj['leaseStartDate'];
    case 25:
      return -777728.69 + 229218.85 * filterObj['model'] + -14608.50 * filterObj['roomNo'] + -1380.81 * filterObj['floor'] + -5516.83 * filterObj['area'] + 9856.48 * filterObj['leaseStartDate'];
    case 26:
      return -255433.11 + -26943.14 * filterObj['model'] + -7663.88 * filterObj['roomNo'] + -55102.01 * filterObj['floor'] + 2986.62 * filterObj['area'] + 3608.70 * filterObj['leaseStartDate'];
    case 27:
      return -510314.30 + 226806.95 * filterObj['model'] + -15763.02 * filterObj['roomNo'] + -53731.36 * filterObj['floor'] + -6330.95 * filterObj['area'] + 7170.58 * filterObj['leaseStartDate'];
    default:
      return 0;
  }
  /*
  function town1(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -172418585.71 + -237464.29 * filterObj['model'] + 40792.86 * filterObj['model'] + 58314.29 * filterObj['floor']+ 4464.29 * filterObj['area'] + 86935.71 * filterObj['leaseStartDate'];
  }

  function town2(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -9825607.69 + -115184.62 * filterObj['model'] + 1692.31 * filterObj['model'] + 8523.08 * filterObj['floor']+ 7507.69 * filterObj['area'] + 9892.31 * filterObj['leaseStartDate'];
  }

  function town3(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1850364.99 + 13285.66 * filterObj['model'] + -6717.83 * filterObj['model'] + 913.57 * filterObj['floor']+ 4298.06 * filterObj['area'] + 2768.99 * filterObj['leaseStartDate'];
  }

  function town4(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 2503960.00 + -27900.00 * filterObj['model'] + -3540.00 * filterObj['model'] + 12083.64 * filterObj['floor'] + 4372.73 * filterObj['area'] + -5080.00 * filterObj['leaseStartDate'];
  }

  function town5(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -32239588697.60 + -112045314.81 * filterObj['model'] + -155900222.21 * filterObj['model'] + -159190777.77 * filterObj['floor'] + -884722.22 * filterObj['area'] + 82932481.48 * filterObj['leaseStartDate'];
  }

  function town6(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 7103248.22 + 73686.57 * filterObj['model'] + 51063.15 * filterObj['model'] + 114265.67 * filterObj['floor'] + 2753.16 * filterObj['area'] + -22214.24 * filterObj['leaseStartDate'];
  }

  function town7(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -968214.29 + 144541.67 * filterObj['model'] + 5500.00 * filterObj['model'] + 11833.33 * filterObj['floor'] + -791.67 * filterObj['area'] + 3291.67 * filterObj['leaseStartDate'];
  }

  function town8(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -868679.38 + -158238.10 * filterObj['model'] + 10569.26 * filterObj['model'] + 32188.31 * filterObj['floor'] + 8235.93 * filterObj['area'] + 3383.12 * filterObj['leaseStartDate'];
  }

  function town9(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1252712.38 + 153832.99 * filterObj['model'] + 5653.77 * filterObj['model'] + 1264.77 * filterObj['floor'] + -2653.77 * filterObj['area'] + 5592.67 * filterObj['leaseStartDate'];
  }

  function town10(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1064590.32 + -2275290.32 * filterObj['model'] + 138258.06 * filterObj['model'] + 135806.45 * filterObj['floor'] + 98064.52 * filterObj['area'] + 4000.00 * filterObj['leaseStartDate'];
  }

  function town11(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1897879.08 + 83326.03 * filterObj['model'] + -11357.53 * filterObj['model'] + 2139.73 * filterObj['floor'] + -227.40 * filterObj['area'] + 10571.23 * filterObj['leaseStartDate'];
  }

  function town12(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 1510416.67 + 289827.96 * filterObj['model'] + 72806.45 * filterObj['model'] + 241580.65 * filterObj['floor'] + -4440.86 * filterObj['area'] + -10580.65 * filterObj['leaseStartDate'];
  }

  function town13(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -865603.64 + 232522.58 * filterObj['model'] + -7812.90 * filterObj['model'] + -9901.08 * filterObj['floor'] + -6010.75 * filterObj['area'] + 5713.98 * filterObj['leaseStartDate'];
  }

  function town14(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -5651369.84 + 1054288.89 * filterObj['model'] + 127133.33 * filterObj['model'] + 285933.33 * filterObj['floor'] + -42711.11 * filterObj['area'] + 38177.78 * filterObj['leaseStartDate'];
  }

  function town15(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -720691.81 + -143502.36 * filterObj['model'] + 3883.71 * filterObj['model'] + 11984.65 * filterObj['floor'] + 8891.97 * filterObj['area'] + 5425.03 * filterObj['leaseStartDate'];
  }

  function town16(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 0;
  }

  function town17(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 0;
  }

  function town18(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1096005.80 + 193625.90 * filterObj['model'] + 13701.44 * filterObj['model'] + -37519.53 * filterObj['floor'] + -3463.00 * filterObj['area'] + 9902.88 * filterObj['leaseStartDate'];
  }

  function town19(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1348953.23 + -40107.61 * filterObj['model'] + -2398.89 * filterObj['model'] + -14790.35 * filterObj['floor'] + 6721.71 * filterObj['area'] + 12823.75 * filterObj['leaseStartDate'];
  }

  function town20(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -1193085.18 + 70916.01 * filterObj['model'] + -7736.17 * filterObj['model'] + 9936.76 * filterObj['floor'] + 239.13 * filterObj['area'] + 12057.31 * filterObj['leaseStartDate'];
  }

  function town21(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -785064.52 + -7930.74 * filterObj['model'] + 1181.82 * filterObj['model'] + 10450.22 * filterObj['floor'] + 4411.26 * filterObj['area'] + 8155.84 * filterObj['leaseStartDate'];
  }

  function town22(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 627081.02 + 47206.02 * filterObj['model'] + -10307.87 * filterObj['model'] + 100032.41 * filterObj['floor'] + 2122.69 * filterObj['area'] + -7324.07 * filterObj['leaseStartDate'];
  }

  function town23(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return 1393484.55 + -240695.91 * filterObj['model'] + -5676.90 * filterObj['model'] + -55859.65 * filterObj['floor'] + 14961.99 * filterObj['area'] + -15995.61 * filterObj['leaseStartDate'];
  }

  function town24(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -468989.58 + -295346.15 * filterObj['model'] + -140038.46 * filterObj['model'] + -227250.00 * filterObj['floor'] + 7980.77 * filterObj['area'] + 7461.54 * filterObj['leaseStartDate'];
  }

  function town25(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -777728.69 + 229218.85 * filterObj['model'] + -14608.50 * filterObj['model'] + -1380.81 * filterObj['floor'] + -5516.83 * filterObj['area'] + 9856.48 * filterObj['leaseStartDate'];
  }

  function town26(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -255433.11 + -26943.14 * filterObj['model'] + -7663.88 * filterObj['model'] + -55102.01 * filterObj['floor'] + 2986.62 * filterObj['area'] + 3608.70 * filterObj['leaseStartDate'];
  }

  function town27(filterObj['roomNo']], filterObj['model'], filterObj['floor'], filterObj['area'], filterObj['leaseStartDate']){
    return -510314.30 + 226806.95 * filterObj['model'] + -15763.02 * filterObj['model'] + -53731.36 * filterObj['floor'] + -6330.95 * filterObj['area'] + 7170.58 * filterObj['leaseStartDate'];
  }*/

  function onErr(err) {
    console.log(err);
    return 1;
  }
}

module.exports = formula;
