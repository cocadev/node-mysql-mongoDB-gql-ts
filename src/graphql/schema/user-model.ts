// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   full_name: String,
//   email: String
// });

// export const User = mongoose.model('ur_user', userSchema); 

export default (sequelize, Sequelize) => {
  const User = sequelize.define('ur_users', {
    street: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    }
  });
  
  return User;
}