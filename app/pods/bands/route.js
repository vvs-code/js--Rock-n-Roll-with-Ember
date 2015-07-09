import Ember from 'ember';
import Band from '../band/model';

var ledZeppelin = Band.create({ name: 'Led Zeppelin' });
var pearlJam = Band.create({ name: 'Pearl Jam' });
var fooFighters = Band.create({ name: 'Foo Fighters' });

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
