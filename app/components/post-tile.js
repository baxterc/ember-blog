import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      this.sendAction('destroyPost', post);
    },
    saveTag(params) {
      this.sendAction('saveTag', params);
    }
  }
});
