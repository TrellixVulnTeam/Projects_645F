var left1 = 0.39;
var left2 = 0.424;
var left3 = 0.48;
var left4 = 0.514;
var left5 = 0.57;
var left6 = 0.604;

const tables = [
  {kat: 1, masano: 1, top:0.2, left: 0.22, direction:'left'},
  {kat: 1, masano: 2, top:0.2, left: 0.254, direction:'right'},

  /*Orta Masalar*/

  {kat: 1, masano: 3, top:0.3, left: left1, direction:'left'},
  {kat: 1, masano: 4, top:0.3, left: left2, direction:'right'},

  {kat: 1, masano: 5, top:0.3, left: left3, direction:'left'},
  {kat: 1, masano: 6, top:0.3, left: left4, direction: 'right'},

  {kat: 1, masano: 7, top:0.3, left: left5, direction:'left'},
  {kat: 1, masano: 8, top:0.3, left: left6, direction:'right'},


  {kat: 1, masano: 9, top:0.35, left: left1, direction:'left'},
  {kat: 1, masano: 10, top:0.35, left: left2, direction:'right'},

  {kat: 1, masano: 11, top:0.35, left: left3, direction:'left'},
  {kat: 1, masano: 12, top:0.35, left: left4, direction: 'right'},

  {kat: 1, masano: 13, top:0.35, left: left5, direction:'left'},
  {kat: 1, masano: 14, top:0.35, left: left6, direction:'right'},


  {kat: 1, masano: 15, top:0.4, left: left1, direction:'left'},
  {kat: 1, masano: 16, top:0.4, left: left2, direction:'right'},

  {kat: 1, masano: 17, top:0.4, left: left3, direction:'left'},
  {kat: 1, masano: 18, top:0.4, left: left4, direction: 'right'},

  {kat: 1, masano: 19, top:0.4, left: left5, direction:'left'},
  {kat: 1, masano: 20, top:0.4, left: left6, direction:'right'},


  {kat: 1, masano: 21, top:0.45, left: left1, direction:'left'},
  {kat: 1, masano: 22, top:0.45, left: left2, direction:'right'},

  {kat: 1, masano: 23, top:0.45, left: left3, direction:'left'},
  {kat: 1, masano: 24, top:0.45, left: left4, direction: 'right'},

  {kat: 1, masano: 25, top:0.45, left: left5, direction:'left'},
  {kat: 1, masano: 26, top:0.45, left: left6, direction:'right'},


  {kat: 1, masano: 27, top:0.55, left: left1, direction:'left'},
  {kat: 1, masano: 28, top:0.55, left: left2, direction:'right'},

  {kat: 1, masano: 29, top:0.55, left: left3, direction:'left'},
  {kat: 1, masano: 30, top:0.55, left: left4, direction: 'right'},

  {kat: 1, masano: 31, top:0.55, left: left5, direction:'left'},
  {kat: 1, masano: 32, top:0.55, left: left6, direction:'right'},



  {kat: 1, masano: 33, top:0.6, left: left1, direction:'left'},
  {kat: 1, masano: 34, top:0.6, left: left2, direction:'right'},

  {kat: 1, masano: 35, top:0.6, left: left3, direction:'left'},
  {kat: 1, masano: 36, top:0.6, left: left4, direction: 'right'},

  {kat: 1, masano: 37, top:0.6, left: left5, direction:'left'},
  {kat: 1, masano: 38, top:0.6, left: left6, direction:'right'},


  {kat: 1, masano: 39, top:0.65, left: left1, direction:'left'},
  {kat: 1, masano: 40, top:0.65, left: left2, direction:'right'},

  {kat: 1, masano: 41, top:0.65, left: left3, direction:'left'},
  {kat: 1, masano: 42, top:0.65, left: left4, direction: 'right'},

  {kat: 1, masano: 43, top:0.65, left: left5, direction:'left'},
  {kat: 1, masano: 44, top:0.65, left: left6, direction:'right'},

  /*Orta masalar*/

  {kat: 1, masano: 45, top:0.41, left: 0.15, direction:'top'},
  {kat: 1, masano: 46, top:0.41, left: 0.2, direction:'top'},

  {kat: 1, masano: 47, top:0.59, left: 0.18, direction:'right'},
  {kat: 1, masano: 48, top:0.63, left: 0.18, direction:'right'},
  {kat: 1, masano: 49, top:0.67, left: 0.18, direction:'right'},
  {kat: 1, masano: 50, top:0.71, left: 0.18, direction:'right'},

  {kat: 1, masano: 51, top:0.63, left: 0.11, direction:'top'},
  {kat: 1, masano: 52, top:0.67, left: 0.11, direction:'bottom'},

  {kat: 1, masano: 53, top:0.76, left: 0.08, direction:'top'},
  {kat: 1, masano: 54, top:0.76, left: 0.13, direction:'top'},

//--------
  {kat: 1, masano: 55, top:0.82, left: 0.07, direction:'top'},
  {kat: 1, masano: 56, top:0.86, left: 0.07, direction:'bottom'},

  {kat: 1, masano: 57, top:0.82, left: 0.16, direction:'top'},
  {kat: 1, masano: 58, top:0.86, left: 0.16, direction:'bottom'},

  {kat: 1, masano: 59, top:0.89, left: 0.11, direction:'left'},
  {kat: 1, masano: 60, top:0.89, left: 0.15, direction:'right'},

]




var masalar = [
  {kat:1, bilgiler: [
    {masano: 1, top:0.2, left: 0.22, direction:'left'},
    {masano: 2, top:0.2, left: 0.254, direction:'right'},

    /*Orta Masalar*/

    {masano: 3, top:0.3, left: left1, direction:'left'},
    {masano: 4, top:0.3, left: left2, direction:'right'},

    {masano: 5, top:0.3, left: left3, direction:'left'},
    {masano: 6, top:0.3, left: left4, direction: 'right'},

    {masano: 7, top:0.3, left: left5, direction:'left'},
    {masano: 8, top:0.3, left: left6, direction:'right'},


    {masano: 9, top:0.35, left: left1, direction:'left'},
    {masano: 10, top:0.35, left: left2, direction:'right'},

    {masano: 11, top:0.35, left: left3, direction:'left'},
    {masano: 12, top:0.35, left: left4, direction: 'right'},

    {masano: 13, top:0.35, left: left5, direction:'left'},
    {masano: 14, top:0.35, left: left6, direction:'right'},


    {masano: 15, top:0.4, left: left1, direction:'left'},
    {masano: 16, top:0.4, left: left2, direction:'right'},

    {masano: 17, top:0.4, left: left3, direction:'left'},
    {masano: 18, top:0.4, left: left4, direction: 'right'},

    {masano: 19, top:0.4, left: left5, direction:'left'},
    {masano: 20, top:0.4, left: left6, direction:'right'},


    {masano: 21, top:0.45, left: left1, direction:'left'},
    {masano: 22, top:0.45, left: left2, direction:'right'},

    {masano: 23, top:0.45, left: left3, direction:'left'},
    {masano: 24, top:0.45, left: left4, direction: 'right'},

    {masano: 25, top:0.45, left: left5, direction:'left'},
    {masano: 26, top:0.45, left: left6, direction:'right'},


    {masano: 27, top:0.55, left: left1, direction:'left'},
    {masano: 28, top:0.55, left: left2, direction:'right'},

    {masano: 29, top:0.55, left: left3, direction:'left'},
    {masano: 30, top:0.55, left: left4, direction: 'right'},

    {masano: 31, top:0.55, left: left5, direction:'left'},
    {masano: 32, top:0.55, left: left6, direction:'right'},



    {masano: 33, top:0.6, left: left1, direction:'left'},
    {masano: 34, top:0.6, left: left2, direction:'right'},

    {masano: 35, top:0.6, left: left3, direction:'left'},
    {masano: 36, top:0.6, left: left4, direction: 'right'},

    {masano: 37, top:0.6, left: left5, direction:'left'},
    {masano: 38, top:0.6, left: left6, direction:'right'},


    {masano: 39, top:0.65, left: left1, direction:'left'},
    {masano: 40, top:0.65, left: left2, direction:'right'},

    {masano: 41, top:0.65, left: left3, direction:'left'},
    {masano: 42, top:0.65, left: left4, direction: 'right'},

    {masano: 43, top:0.65, left: left5, direction:'left'},
    {masano: 44, top:0.65, left: left6, direction:'right'},

    /*Orta masalar*/

    {masano: 45, top:0.41, left: 0.15, direction:'top'},
    {masano: 46, top:0.41, left: 0.2, direction:'top'},

    {masano: 47, top:0.59, left: 0.18, direction:'right'},
    {masano: 48, top:0.63, left: 0.18, direction:'right'},
    {masano: 49, top:0.67, left: 0.18, direction:'right'},
    {masano: 50, top:0.71, left: 0.18, direction:'right'},

    {masano: 51, top:0.63, left: 0.11, direction:'top'},
    {masano: 52, top:0.67, left: 0.11, direction:'bottom'},

    {masano: 53, top:0.76, left: 0.08, direction:'top'},
    {masano: 54, top:0.76, left: 0.13, direction:'top'},

  //--------
    {masano: 55, top:0.82, left: 0.07, direction:'top'},
    {masano: 56, top:0.86, left: 0.07, direction:'bottom'},

    {masano: 57, top:0.82, left: 0.16, direction:'top'},
    {masano: 58, top:0.86, left: 0.16, direction:'bottom'},

    {masano: 59, top:0.89, left: 0.11, direction:'left'},
    {masano: 60, top:0.89, left: 0.15, direction:'right'},
  ]},

]




const TablesReducers = (state = masalar, action) => {

  switch (action.type) {
    case "TABLES":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default TablesReducers;
