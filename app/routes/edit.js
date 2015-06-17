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
  model: function(params) {
    return this.store.find('item', params.id);
  }
});
