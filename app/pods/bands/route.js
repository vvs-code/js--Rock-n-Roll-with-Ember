import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('band');
  },

  actions: {
    createBand: function() {
      var name = this.get('controller.name');
      var controller = this.controller;
      if(name)  {
        var band = this.store.createRecord('band', controller.getProperties('name'));
        band.save().then(function() {
          this.set('controller.name', '');
          this.transitionTo('band.songs', band);
        }.bind(this));
      }
    },

    didTransition: function() {
      Ember.$(document).attr('title', 'Bands - Rock & Roll');
    }
  }
});
