import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedPosts: Ember.computed.sort('posts', 'sortDefinition'),
  sortDefinition: ['date:desc'],
  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 5,
  pagedContent:pagedArray('sortedPosts', {pageBinding: "page", perPageBinding:"perPage"}),
  totalPagesBinding: "pagedContent.totalPages"
});
