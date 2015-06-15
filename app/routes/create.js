/**
 * Created by anandu on 4/6/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    Ember.Logger.log('inside create model hook from create route');
    return this.store.createRecord('item');
  }
});
