import Appointment from "../models/appointment";

//id, doctor, date, isFinished, location, price
export const APPOINTMENTS = [
  new Appointment(
    1,
    "Sarah",
    "https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "March 5",
    "Completed",
    "",
    200
  ),
  new Appointment(
    2,
    "Abe",
    "https://cdn.pixabay.com/photo/2018/03/27/16/24/corporal-3266508_960_720.jpg",
    "September 27",
    "Completed",
    "",
    300
  ),
];
