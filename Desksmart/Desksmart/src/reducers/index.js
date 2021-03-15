import WidthReducers from './size';
import TablesReducers from './alltables';
import HoursReducers from './hours';
import OldAppointmentReducers from './oldappointment';
import RandevuReducers from './randevular';
import KatReducers from './kat';


import {combineReducers} from "redux";

const allReducers = combineReducers({

  width: WidthReducers,
  tables: TablesReducers,
  hours: HoursReducers,
  oldapp: OldAppointmentReducers,
  randevu: RandevuReducers,
  kat: KatReducers,
})

export default allReducers;
