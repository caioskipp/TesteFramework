export default class loginResponseModel {
  id: string;
  name: string;
  picture: string;
  city: string;
  state: string;

  constructor(
    id: string,
    name: string,
    picture: string,
    city: string,
    state: string,
  ) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.city = city;
    this.state = state;
  }

  mock() {
    return {
      id: '01',
      name: 'Caio Franco',
      picture: '',
      city: 'Uberlândia',
      state: 'MG',
    };
  }
}
