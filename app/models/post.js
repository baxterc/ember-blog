import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  tags: DS.hasMany('tag', { async: true }),
  comments: DS.hasMany('comment', {async: true})
});
