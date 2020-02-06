export default (sequelize, Sequelize) => {
  const User = sequelize.define('ur_users', {
    full_name: Sequelize.STRING,
    created_at: Sequelize.DATE,
    company_id: Sequelize.INTEGER
  }, {
    timestamps: false
  });

  return User;
}