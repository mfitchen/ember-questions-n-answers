import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToFavs(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
