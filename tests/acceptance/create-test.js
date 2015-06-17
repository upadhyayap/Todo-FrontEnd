import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'todoapp/tests/helpers/start-app';

var application;

module('Acceptance | create', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /create', function(assert) {
  visit('/create');

  andThen(function() {
    assert.equal(currentURL(), '/create');
  });
});
