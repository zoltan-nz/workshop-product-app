import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category'),
  name: DS.attr('string'),
  sku: DS.attr('string'),
  price: DS.attr('number')
});
