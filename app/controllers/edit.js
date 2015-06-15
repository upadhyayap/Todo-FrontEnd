/**
 * Created by anandu on 11/6/15.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  status: ["Open","Close"],
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());
      // create a record and save it to the store
      var newItem =  this.get('model');
      var controller = this;
      newItem.save().then(function(response) {
        controller.notifications.addNotification({
          message: 'Task Details has been changed ',
          type: 'success',
          autoClear: true
        });
        controller.transitionToRoute('index');
      }, function(err) {
        controller.notifications.addNotification({
          message: 'Someting went wrong Error in creating task Please try again ',
          type: 'error',
          autoClear: true
        });
      });
    },
    cancel: function() {
      ///this.get('model').deleteRecord();
      this.notifications.addNotification({
        message: 'Task edit action cancelled',
        type: 'warning',
        autoClear: true
      });
      this.transitionToRoute('index');
    }
  }

});
