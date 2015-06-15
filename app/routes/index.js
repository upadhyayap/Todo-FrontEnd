/**
 * Created by anandu on 4/6/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  model : function() {
    Ember.Logger.log('Plain model called from index route');
    return this.store.find('item');
  }
});
