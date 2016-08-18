import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
