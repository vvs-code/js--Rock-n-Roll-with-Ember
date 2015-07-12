import DS from 'ember-data';

var string = DS.attr('string');

export default DS.Model.extend({
  name: string,
  description: string,
  language: string,
  songs: DS.hasMany('song'),

  site: function() {
    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  }.property('slug', 'language')
});
