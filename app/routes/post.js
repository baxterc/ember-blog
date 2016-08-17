import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(post) {
      if (confirm('Are you sure you want to delete this post?')){
        post.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
