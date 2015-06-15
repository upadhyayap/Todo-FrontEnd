import Ember from 'ember';
import NotifierMixin from '../../../mixins/notifier';
import { module, test } from 'qunit';

module('Unit | Mixin | notifier');

// Replace this with your real tests.
test('it works', function(assert) {
  var NotifierObject = Ember.Object.extend(NotifierMixin);
  var subject = NotifierObject.create();
  assert.ok(subject);
});
