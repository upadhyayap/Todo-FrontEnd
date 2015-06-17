import Ember from 'ember';

export default Ember.Component.extend({
  showError : false,
  actions: {
    showErrors: function () {
      this.set("showError", true);
    },
    hideErrors: function () {
      this.set("showError", false);
    }
  }
});
