import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedPosts: Ember.computed.sort('posts', 'sortDefinition'),
  sortDefinition: ['date'],
});
