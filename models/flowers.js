// module.exports = function(sequelize, DataTypes) {
//   const Flowers = sequelize.define("flowers",{
//     name: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     email: DataTypes.STRING,
//     cost: DataTypes.DECIMAL
//   },
//     {
//       timestamps: false
//     }
//   );
//   return Flowers;
// };

const orm = require('../config/orm.js');
let flower = {
  all: function(cb){
    orm.selectAll("flowers", function(res) {
      cb(res);
    })
  },
}

module.exports = flower;
