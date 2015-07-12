import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',

  isAddButtonDisabled: Ember.computed.empty('title')
});
