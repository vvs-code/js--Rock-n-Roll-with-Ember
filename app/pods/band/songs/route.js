import Ember from 'ember';
import Song from '../../songs/model';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band').get('songs');
  },

  actions: {
    createSong: function() {
      var band = this.modelFor('band');
      var title = this.get('controller.title');

      if(title && band) {
        band.get('songs').pushObject(Song.create({
          title: title,
          band: band.get('name')
        }));

        this.set('controller.title', '');
      }
    },

    updateRating: function(params) {
      var song = params.item,
        rating = params.rating;

      song.set('rating', rating);
    },

    didTransition: function() {
      var band = this.modelFor('band');
      Ember.$(document).attr('title', '%@ songs - Rock & Roll'.fmt(band.get('name')));
    },
  }
});
