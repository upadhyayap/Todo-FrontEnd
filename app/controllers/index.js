/**
 * Created by anandu on 4/6/15.
 */
import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['deadline'],
  sortAscending : true,
  rowCount: 1,
  filteredModel: function(){
    Ember.Logger.log('filteredModel Called');
    if (this.get('searchitem')) {
      return this.get('searchedItem');
    } else {
      return this.get('model');
    }
  }.property('searchitem', 'searchedItem'),

  searchedItem: function() {
    var search = this.get('searchitem');
    return this.filter(function(item) {
      return item.get('title').toLowerCase().indexOf(search) !== -1;
    });
  }.property('searchitem', 'filteredModel.@each.title'),

  actions: {
    edit: function(item){
      this.transitionToRoute('edit',item);
      Ember.Logger.log('route completed to edit');
    },
    delete: function(){
      Ember.$('#myModal').modal('show');
    },
    cancelDelete: function(){
      Ember.$('#myModal').modal('hide');
    },
    confirmDelete: function(item){
      item.deleteRecord();
      item.save();
      Ember.$('#myModal').modal('hide');
      this.notifications.addNotification({
        message: 'Task deleted',
        type: 'success',
        autoClear: true
      });
    }
  }

});
