import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToFavs(item) {
      this.get('favoriteQuestions').add(item);
    }
  }
});
