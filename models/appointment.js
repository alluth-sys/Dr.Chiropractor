//describe how an appointment look like

class Appointment {
  constructor(id, ownerId, doctorId, date, isFinished, location, price) {
    this.id = id;
    this.ownerId = ownerId; //Who order this appoinment
    this.doctorId = doctorId; //Who is responsible for this appointment
    this.date = date; //Creation date
    this.isFinished = isFinished; //If true this appointment becomes History
    this.location = location; // Appointment location
    this.price = price; // Appointment Price
  }
}
