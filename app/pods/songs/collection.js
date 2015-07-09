import Ember from 'ember';

export default Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['rating'],
  sortAscending: false,
  content: []
});
