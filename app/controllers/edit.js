/**
 * Created by anandu on 11/6/15.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  status: ["Open","Close"],
  actions: {
    save: function(){
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newItem =  this.get('model');
      //newItem.save().then();
      var controller = this;
      newItem.validate().then(function() {
        newItem.save().then(function() {
          controller.notifications.addNotification({
            message: 'Task details has been changed ',
            type: 'success',
            autoClear: true
          });
          controller.transitionToRoute('index');
        }, function() {
          controller.notifications.addNotification({
            message: 'Error in saving Task details ',
            type: 'error',
            autoClear: true
          });
        });
      }).catch(function() {
        controller.set("showError", true);
        controller.notifications.addNotification({
          message: "Something went wrong and we are not able to create task please try again",
          type: 'error',
          autoClear: true
        })
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
