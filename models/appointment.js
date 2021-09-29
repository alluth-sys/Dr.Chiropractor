//describe how an appointment look like

export default class Appointment {
  constructor(id, doctor, imageUrl, date, isFinished, location, price) {
    this.id = id;
    //this.owner = owner; //Who order this appoinment
    this.doctor = doctor; //Who is responsible for this appointment
    this.imageUrl = imageUrl;
    this.date = date; //Creation date
    this.isFinished = isFinished; //If true this appointment becomes History
    this.location = location; // Appointment location
    this.price = price; // Appointment Price
  }
}
