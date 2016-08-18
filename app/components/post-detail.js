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
    },
    addComment(params){
      this.sendAction('addComment', params);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    },
    destroyComment(comment, post) {
      this.sendAction('destroyComment', comment, post);
    }
  }
});
