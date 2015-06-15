/**
 * Created by anandu on 4/6/15.
 */
import DS from "ember-data";

var item = DS.Model.extend({
  title         : DS.attr("string"),
  summery       : DS.attr("string"),
  deadline      : DS.attr("date"),
  status        : DS.attr("string")
});

export default item;
