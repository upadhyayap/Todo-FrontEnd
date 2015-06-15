import Ember from 'ember';

/*export function indexIncrement('increment',function(){}) {
  return params;
}*/

export default Ember.Handlebars.registerBoundHelper('increment', function(integer) {
  return integer + 1;
});

//export default Ember.HTMLBars.makeBoundHelper(indexIncrement);
