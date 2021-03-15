import moment from 'moment';
var tarih = new Date()
var date = moment(tarih).format("DD.MM.YYYY");
console.log(date);

var randevular = [
  {kat: 1, masano:27, tarih:date, saat:"19:00-19:30"},
  {kat: 1, masano:21, tarih:date, saat:"17:00-17:30"},
  {kat: 1, masano:3, tarih:date, saat:"20:00-20:30"},
  {kat: 2, masano:46, tarih:date, saat:"15:30-16:00"},
  {kat: 2, masano:14, tarih:date, saat:"19:00-19:30"},
  {kat: 2, masano:18, tarih:date, saat:"20:00-20:30"},
  {kat: 3, masano:31, tarih:date, saat:"19:00-19:30"},
  {kat: 3, masano:34, tarih:date, saat:"10:00-10:30"},
  {kat: 3, masano:26, tarih:date, saat:"14:30-15:00"},
  {kat: 4, masano:47, tarih:date, saat:"19:00-19:30"},
  {kat: 4, masano:11, tarih:date, saat:"20:00-20:30"},
  {kat: 4, masano:9, tarih:date, saat:"14:30-15:00"},
  {kat: 1, masano:21, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:1, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:2, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:7, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:8, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:40, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:41, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:54, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:55, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:59, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:29, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:31, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:32, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:20, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:14, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:3, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:4, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:5, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:6, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:11, tarih:date, saat:"15:00-15:30"},
  {kat: 1, masano:12, tarih:date, saat:"15:00-15:30"},


]



const RandevuReducers = (state = randevular, action) => {

  console.log(action);

  switch (action.type) {
    case "RANDEVULAR":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default RandevuReducers;
