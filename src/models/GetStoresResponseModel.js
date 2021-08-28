export default class GetStoresResponseModel {
  name: string;
  image: string;
  city: string;
  uf: string;
  rating: number;
  id: string;

  constructor(
    name: string,
    image: string,
    city: string,
    uf: string,
    rating: string,
    id: string,
  ) {
    this.name = name;
    this.image = image;
    this.city = city;
    this.uf = uf;
    this.rating = rating;
    this.id = id;
  }

  mock() {
    return [
      {
        name: 'Loja de frutas',
        image:
          'https://i.pinimg.com/originals/b0/55/d9/b055d9682eee134c4239a30f18d2636d.jpg',
        city: 'Uberlândia',
        uf: 'MG',
        rating: 4.5,
        id: '00001',
      },
    ];
  }
}
