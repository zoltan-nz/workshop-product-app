import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  date: () => faker.date.past(),
  subject: faker.lorem.sentence,
  status: 'new',
  label: () => faker.random.arrayElement(['inbox', 'outbox'])

});
