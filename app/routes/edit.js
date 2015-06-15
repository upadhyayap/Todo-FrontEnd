/**
 * Created by anandu on 11/6/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(item) {
    Ember.Logger.log('Entered in render template');
    Ember.Logger.log(item.title);
    this.render('create', {
      controller: 'edit',

    });
  },
  model: function(item) {
    Ember.Logger.log('inside model hook of edit route');
    Ember.Logger.log(item.title);
    return this.store.find('item', item.title);
  }
});
