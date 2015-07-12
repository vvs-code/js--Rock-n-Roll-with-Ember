import DS from 'ember-data';

var string = DS.attr('string');
var number = DS.attr('number');

export default DS.Model.extend({
  title: string,
  rating: number,
  band: DS.belongsTo('band')
});
