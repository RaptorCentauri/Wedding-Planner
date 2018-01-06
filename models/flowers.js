module.exports = function(sequelize, DataTypes) {
  const Flowers = sequelize.define("flowers",{
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  },
    {
      timestamps: false
    }
  );
  return Flowers;
};
