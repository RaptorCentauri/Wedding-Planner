module.exports = function(sequelize, DataTypes) {
  const Music = sequelize.define("music",{
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email:  DataTypes.STRING,
    cost: DataTypes.DECIMAL
  },
    {
      timestamps: false
    }
  );
  return Music;
};
