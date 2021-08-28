export default class GetProductListResponseModel {
  name: string;
  description: string;
  price: number;
  id: string;
  image: string;

  constructor(
    name: string,
    value: number,
    description: string,
    id: string,
    image: string,
  ) {
    this.name = name;
    this.description = description;
    this.price = value;
    this.id = id;
    this.image = image;
  }

  mock() {
    return [
      {
        name: 'Maçã',
        description: 'Maçã da melhor qualidade.',
        price: 2.5,
        id: '01',
        image:
          'https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-1024-1024.jpg',
      },
      {
        name: 'Pêra',
        description: 'Pêra da melhor qualidade.',
        price: 2.75,
        id: '02',
        image:
          'https://deangelina-img.azureedge.net/product/1782-pera-pakas-kg-g.jpg',
      },
      {
        name: 'Banana',
        description: 'Banana da melhor qualidade.',
        price: 2.2,
        id: '03',
        image:
          'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg',
      },
      {
        name: 'Abacaxi',
        description: 'Abacaxi da melhor qualidade.',
        price: 5.59,
        id: '04',
        image:
          'https://www.confianca.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12382-0.jpg.jpg',
      },
      {
        name: 'Manga',
        description: 'Manga da melhor qualidade.',
        price: 3.99,
        id: '05',
        image:
          'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_manga_tommy_feita_por_enxerto_5067_2_20190521161350.jpg',
      },
    ];
  }
}
