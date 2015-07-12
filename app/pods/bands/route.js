import Ember from 'ember';


function wait(promise, delay) {
  return new Ember.RSVP.Promise(function(resolve) {
    setTimeout(function() { promise.then(function(result) {
      resolve(result);
    });
    }, delay);
  });
}

export default Ember.Route.extend({
  model: function() {
    return wait(this.store.find('band'), 0); //wait used to check loader
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
