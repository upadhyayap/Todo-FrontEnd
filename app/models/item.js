/**
 * Created by anandu on 4/6/15.
 */
import DS from "ember-data";
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  title         : DS.attr("string"),
  summery       : DS.attr("string"),
  deadline      : DS.attr("date"),
  status        : DS.attr("string"),

  validations: {
    title: {
      presence: { message: 'Title must not be blank' }
    },
    deadline: {
      presence: { message: 'Deadline must not be blank' }
    }
  }
});

//export default item;
