import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name: faker.commerce.productName,
    sku: faker.random.uuid(),
    price: faker.commerce.price,

    afterCreate(product) {
        product.categoryId = faker.random.number({min: 1, max: 10});
        product.save();
    }
});
