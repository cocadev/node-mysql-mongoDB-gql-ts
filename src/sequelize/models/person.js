// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var PersonModel = sequelize.define('person', {
//     _id: String,
//     firstname: String,
//     lastname: String
//   });
//   return PersonModel;
// };


'use strict';
module.exports = function() {
  var PersonModel = Mongoose.model('person', {
    _id: String,
    name: String,
  });
  return PersonModel;
};

// export const PersonModel = Mongoose.model("person", {
//   firstname: String,
//   lastname: String
// });