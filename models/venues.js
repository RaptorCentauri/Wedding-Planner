module.exports = function(sequelize, DataTypes) {
  const Venue = sequelize.define("venue", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  },
  {
    timestamps: false
  }
);
  return Venue;
};
