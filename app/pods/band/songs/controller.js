import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  title: '',

  isAddButtonDisabled: Ember.computed.empty('title'),

  noSongs: Ember.computed.empty('model'),
  canCreateSongs: Ember.computed.or('model.length', 'songCreationStarted'),

  sortBy: 'ratingDesc',
  sortProperties: function() {
    var options = {
      "ratingDesc": "rating:desc,title:asc",
      "ratingAsc": "rating:asc,title:asc",
      "titleDesc": "title:desc",
      "titleAsc": "title:asc",
    };
    return options[this.get('sortBy')].split(',');
  }.property('sortBy'),
  sortedSongs: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },

    setSorting: function(option) {
      this.set('sortBy', option);
    }
  }
});
