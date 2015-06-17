import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
   needs: ['controller:index']
});

test('Index rote is working fine', function(assert) {
  var route = this.subject();
  assert.ok(route);
  var item = route.send('model');
  assert.ok(item instanceof DS.Model);
});
