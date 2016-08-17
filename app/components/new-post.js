import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showNewPost() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        title: this.get('title') || "",
        author: this.get('author')|| "",
        content: this.get('content')|| "",
        tag: this.get('tag')|| "",
        date: this.get('date')|| "",
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
