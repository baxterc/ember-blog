import Ember from 'ember';

export default Ember.Component.extend({
  addTag: false,
  actions: {
    showTagForm() {
      this.set('addTag', true);
    },
    saveTag() {
      var params = {
        name: this.get('name'),
        post: this.get('post')
      };
      this.set('addTag', false);
      this.sendAction('saveTag', params);
    }
  }
});
