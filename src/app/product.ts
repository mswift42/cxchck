export class Product {
  public title: string;
  public thumbnail: string;
  public price: string;
  public description: string;
  public url: string;


  constructor(title: string, thumbnail: string, price: string, description: string, url: string) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.price = price;
    this.description = description;
    this.url = url;
  }
}
