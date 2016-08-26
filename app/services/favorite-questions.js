import Ember from 'ember';

export default Ember.Service.extend({
  qs: [],

  add(q) {
    this.get('qs').pushObject(q);
  },
  remove(item) {
    this.get('items').removeObject(item);
  }
});
