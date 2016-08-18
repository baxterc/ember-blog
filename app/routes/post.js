import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(post) {
      var postComments = post.get("comments").map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(postComments).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },
    updatePost5(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('post', post.id);
    },
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post.id);
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      // debugger;
      comment.save();
      this.transitionTo('post', params.post.id);
    },
    destroyComment(comment, post) {
      comment.destroyRecord();
      this.transitionTo('post', post.id);
    }
  }
});
