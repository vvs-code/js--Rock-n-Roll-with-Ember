import Ember from 'ember';
import Band from '../band/model';
import Song from '../songs/model';

var blackDog = Song.create({ title: 'Black Dog',
  band: 'Led Zeppelin', rating: 3
});
var yellowLedbetter = Song.create({ title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});
var daughter = Song.create({ title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});
var pretender = Song.create({ title: 'The Pretender', band: 'Foo Fighters', rating: 2
});



var ledZeppelin = Band.create({
  name: 'Led Zeppelin',
  description: 'Some description',
  songs: [blackDog]
});
var pearlJam = Band.create({
  name: 'Pearl Jam',
  description: 'Some description',
  songs: [daughter, yellowLedbetter]
});
var fooFighters = Band.create({
  name: 'Foo Fighters',
  description: 'Some description',
  songs: [pretender]
});

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function() {
    return bands;
  },

  actions: {
    createBand: function() {
      var name = this.get('controller.name');
      if(name)  {
        var band = Band.create({name});
        bands.pushObject(band);
        this.set('controller.name', '');
        this.transitionTo('band.songs', band)
      }
    },

    didTransition: function() {
      Ember.$(document).attr('title', 'Bands - Rock & Roll');
    },
  }
});
