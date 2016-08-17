import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    showRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        tag: this.get('tag'),
        date: this.get('date')
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', post, params);
    }
  }
});
