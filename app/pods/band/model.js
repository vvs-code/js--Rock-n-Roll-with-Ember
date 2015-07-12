import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  language: '',
  slug: function() {
    return this.get(
      'name').dasherize();
  }.property('name'),
  site: function() {
    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  }.property('slug', 'language'),

  /*---*/
  setupSongs: function() {
    if(!this.get('songs')) {
      this.set('songs', []);
    }
  }.on('init')
});
