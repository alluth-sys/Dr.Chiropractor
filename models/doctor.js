//Describe how a doctor should look like

export default class Doctor {
  constructor(id, name, imgurl, description, price, rating, trainerType) {
    this.id = id;
    this.name = name;
    this.imgurl = imgurl;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.trainerType = trainerType;
  }
}
