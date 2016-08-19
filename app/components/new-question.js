import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {

    newFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        detail: this.get('detail')
      };
      this.set('question', '');
      this.set('author', '');
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
