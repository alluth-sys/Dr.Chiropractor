//Describe how a doctor should look like

export default class Doctor {
  constructor(id, name, imageUrl, description, price, rating, trainerType) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.trainerType = trainerType;
  }
}
