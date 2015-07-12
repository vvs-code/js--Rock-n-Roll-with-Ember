import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('star-rating', 'Unit | Component | star rating', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('Renders the full and empty stars correctly', function(assert) {
  var component = this.subject();
  Ember.run(function() {
    component.setProperties({
      rating: 4,
      maxRating: 5
    });
  });
  assert.equal(this.$().find('.glyphicon-star').length, 4, "The right amount of full stars is rendered");
  assert.equal(this.$().find('.glyphicon-star-empty').length, 1, "The right amount of empty stars is rendered");
  Ember.run(function() {
    component.set('maxRating', 10);
  });
  assert.equal(this.$().find('.glyphicon-star').length, 4, "The right amount of full stars is rendered after changing maxRating");
  assert.equal(this.$().find('.glyphicon-star-empty').length, 6, "The right amount of empty stars is rendered after changing maxRating");
});
