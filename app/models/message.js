import DS from 'ember-data';

import { empty, equal } from '@ember/object/computed';

export default DS.Model.extend({
  date: DS.attr('date'),
  subject: DS.attr('string'),
  status: DS.attr('string'),
  label: DS.attr('string'),

  showStatus: equal('label', 'inbox'),
  isInvalid: empty('subject'),
});
