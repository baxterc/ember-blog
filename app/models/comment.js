import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  post: DS.hasMany('post', {async: true})
});
