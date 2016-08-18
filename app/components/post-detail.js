import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPost(post) {
      if(confirm("Are you sure you want to delete this post?")){
        this.sendAction('destroyPost', post);
      }
    },
    updatePost3(post, params) {
      this.sendAction('updatePost4', post, params);
      console.log("Update 3");
    }
  }
});
