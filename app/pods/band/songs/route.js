import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band').get('songs');
  },

  actions: {
    createSong: function() {
      var controller = this.controller,
        band = this.modelFor('band'),
        title = controller.get('title');

      if(title) {
        var song = this.store.createRecord('song', {
          title: title,
          band: band
        });

        song.save().then(function() {
          controller.set('title', '');
        });
      }
    },

    updateRating: function(params) {
      var song = params.item,
        rating = params.rating;

      song.set('rating', rating);
      song.save();
    },

    didTransition: function() {
      var band = this.modelFor('band');
      Ember.$(document).attr('title', '%@ songs - Rock & Roll'.fmt(band.get('name')));
    },
  }
});
