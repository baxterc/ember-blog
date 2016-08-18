import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    showUpdateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        title: this.get('title' || ""),
        author: this.get('author' || ""),
        content: this.get('content' || ""),
        post: this.get('post' || "")
      };
      console.log(params.post.id)
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
