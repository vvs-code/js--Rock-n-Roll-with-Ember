/* global assert */
import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'rarwe/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module('Acceptance | bands', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /bands', function(assert) {
  server = new Pretender(function() {
    this.get('/bands', function(request) {
      var bands = JSON.stringify({
        bands: [
          {id:1, name: 'Radiohead'},
          {id:2, name: 'Long distance Calling'},
        ]
      });
      return [200, {'Content-Type': 'application/json'}, bands];
    });
  });
  visit('/bands');

  andThen(function() {
    assert.equal(find('.band-link').length, 2, 'All band links are rendered');
    assert.equal(find('.band-link:contains("Radiohead")').length, 1, 'First band link contains the band name');
    assert.equal(find('.band-link:contains("Long distance Calling")').length, 1, "The other band link contains the band name");
  });
});
