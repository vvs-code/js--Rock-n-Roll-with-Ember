import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  title: '',

  isAddButtonDisabled: Ember.computed.empty('title'),

  noSongs: Ember.computed.empty('model'),
  canCreateSongs: Ember.computed.or('model.length', 'songCreationStarted'),

  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    }
  }
});
