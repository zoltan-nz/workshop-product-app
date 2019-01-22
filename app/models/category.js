import DS from 'ember-data';

export default DS.Model.extend({
  products: DS.hasMany('product'),
  name: DS.attr('string')
});
