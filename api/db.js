const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  { name: 'Hogwarts Feitiços', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Hogwarts_Feiti%C3%A7os.jpeg?alt=media&token=62825299-ce4e-4ac5-ab0f-ce548a25d524', category: 't-shirts' },
  { name: 'Ideas Are Bulletproof', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Ideas_Are_Bulletproof.jpeg?alt=media&token=11cd22f3-0934-41a7-bd8f-0274b14dd742', category: 't-shirts' },
  { name: 'Breaking Bad', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Breaking_Bad2.jpeg?alt=media&token=894601bd-82e6-48b6-be9c-d02f2442b5d7', category: 't-shirts' },
  { name: 'Magneto X-Men', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Magneto.jpeg?alt=media&token=cc255aee-be41-41db-a4bb-205ea61a6a4a', category: 't-shirts' },
  { name: 'Wolwerine X-Men Origins', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Wolwerine.jpeg?alt=media&token=4e577737-e733-4808-b8b2-dfd7181a9f9f', category: 't-shirts' },
  { name: 'Frase Filme 300', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Frase%20Filme%20300.jpeg?alt=media&token=d88f5648-ddb3-4a5c-9671-ba87f718e7ce', category: 't-shirts' },
  { name: 'Batman Begins', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/Batman_Begins_.jpeg?alt=media&token=d7d0b645-720d-4ef0-b078-a55e217a68ab', category: 't-shirts' },
  { name: 'Leônidas 300', description: faker.lorem.paragraph(), image_url: 'https://firebasestorage.googleapis.com/v0/b/imagens-bc6d5.appspot.com/o/300.jpeg?alt=media&token=fa666455-c9bb-43d3-ad4a-5ee18f53d31a', category: 't-shirts' },
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
