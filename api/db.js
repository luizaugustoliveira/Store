const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  { name: 'Hogwarts Feitiços', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Hogwarts_Feiti%C3%A7os%201.png?alt=media&token=530047aa-46f3-4c5d-ad22-58a40de8c711', category: 't-shirts' },
  { name: 'Ideas Are Bulletproof', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Ideas_Are_Bulletproof%201.png?alt=media&token=c0fe9889-0237-4739-9a63-ca45c94c980a', category: 't-shirts' },
  { name: 'Breaking Bad', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Breaking_Bad2%201.jpg?alt=media&token=6d6ec2cc-2b39-46af-91d5-d981548907cb', category: 't-shirts' },
  { name: 'Magneto X-Men', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Magneto%201.jpg?alt=media&token=fc8a4bfb-351d-45a2-a978-26d3e4cf6ed1', category: 't-shirts' },
  { name: 'Wolwerine X-Men Origins', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Wolwerine%201.jpg?alt=media&token=2c180cd4-35a8-49ed-81c5-50631299fd5b', category: 't-shirts' },
  { name: 'Frase Filme 300', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Frase%20Filme%20300%201.png?alt=media&token=f0e7628f-8a84-4fdf-acc1-d10496ad7d29', category: 't-shirts' },
  { name: 'Batman Begins', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Batman_Begins_%201.png?alt=media&token=3e3ec0aa-514d-4189-89c6-0138795cb615', category: 't-shirts' },
  { name: 'Leônidas 300', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/300%201.jpg?alt=media&token=8742124c-7e05-4df6-982a-5f6d093ef997', category: 't-shirts' },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product, 
    id: faker.datatype.uuid(),
    price_in_cents: faker.datatype.number({
      min: 4000, // valor mínimo para $40
      max: 8000, // valor máximo para $80
    }),
    sales: faker.datatype.number(40),
    created_at: faker.date.past()
  }));

  return [...acc, ...products];
}, []);

module.exports = {
  products: allProducts
}
