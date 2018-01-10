module.exports = function(sequelize, DataTypes) {
  const BridalShop = sequelize.define("bridal_shop",{
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  },
    {
      timestamps: false
    }
  );
  return BridalShop;
};