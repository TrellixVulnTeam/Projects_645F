var appointment = [
  {kat: 1, masano: 5, saat: "19:30-20:00", tarih:"07.05.2020"},
  {kat: 3, masano: 14, saat: "19:30-20:00", tarih:"07.05.2020"},
  {kat: 6, masano: 32, saat: "19:30-20:00", tarih:"07.05.2020"},
  {kat: 2, masano: 3, saat: "19:30-20:00", tarih:"07.05.2020"},
  {kat: 4, masano: 29, saat: "19:30-20:00", tarih:"07.05.2020"},
]

const OldAppointmentReducers = (state = appointment, action) => {

  switch (action.type) {
    case "HOURS":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default OldAppointmentReducers;
