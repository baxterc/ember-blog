import Ember from 'ember';

export default Ember.Component.extend({
  addCommentForm: false,

  actions: {
    showCommentForm() {
      this.set("addCommentForm", true);
    },
    addComment() {
      var params = {
        title: (this.get("title") || ""),
        author: (this.get("author") || ""),
        content: (this.get("content") || ""),
        post: (this.get("post") || "")
      };
      this.sendAction("addComment", params);
      this.set("addCommentForm", false);
    }
  }

});
