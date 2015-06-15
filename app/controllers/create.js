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
      newItem.save();
      // redirects to the index itself
      this.transitionToRoute('index');
    },
    cancel: function() {
      this.get('model').deleteRecord();
      this.transitionToRoute('index');
    }
  }
});
