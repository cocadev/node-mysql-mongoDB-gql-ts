export default (sequelize, Sequelize) => {
  const User = sequelize.define('ur_users', {
    full_name: Sequelize.STRING,
    created_at: Sequelize.DATE,
    companyId: Sequelize.INTEGER
  }, {
    timestamps: false
  });

  return User;
}