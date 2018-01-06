module.exports = function (sequelize, DataTypes) {
  // beer uploaded by user
  const UsersBeers = sequelize.define("UsersBeers");
  return UsersBeers;
};
