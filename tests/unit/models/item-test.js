import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Model | item', {
  // Specify the other units that are required for this test.
  needs: ['model:item']
});

test('Item is a valid model', function(assert) {
  var store = this.store();
  var item = this.subject({title: 'First Title', summery: 'first summery',deadline : "2015-06-16T18:30:00:000Z",status:"Open"});
  assert.ok(item);
  assert.ok(item instanceof DS.Model);

});
