export default (sequelize, Sequelize) => {
  const Company = sequelize.define('ur_companies', {
    name: Sequelize.STRING,
    sla_rule_id: Sequelize.INTEGER,
  });
  return Company;
}