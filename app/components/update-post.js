import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    showPostForm() {
      this.set('updatePostForm', true);
    },
    updatePost1(post) {
      var params = {
        title: this.get('title' || ""),
        author: this.get('author' || ""),
        content: this.get('content' || ""),
        tag: this.get('tag' || ""),
        date: this.get('date' || "")
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost2', post, params);
    }
  }
});
