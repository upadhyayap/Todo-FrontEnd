import Ember from 'ember';

export default Ember.Controller.extend({
  status: ["Open","Close"],
  selectedStatus: 'Open',
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newItem =  this.get('model');
      //newItem.save().then();
      var controller = this;
      newItem.save().then(function(value) {
        controller.notifications.addNotification({
          message: 'New task has been created ',
          type: 'success',
          autoClear: true
        });
        controller.transitionToRoute('index');
      }, function(err) {
        controller.notifications.addNotification({
          message: 'Error in saving Task details ',
          type: 'error',
          autoClear: true
        });
      });
    },
    cancel: function() {
      this.get('model').deleteRecord();
      this.notifications.addNotification({
        message: 'New task cancelled ',
        type: 'warning',
        autoClear: true
      });
      this.transitionToRoute('index');
    }
  }
});
