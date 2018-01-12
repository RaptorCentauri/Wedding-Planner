// module.exports = function(sequelize, DataTypes) {
//   const Venue = sequelize.define("venue", {
//     id: {
//      type: DataTypes.INTEGER,
//      autoIncrement: true,
//      primaryKey: true
//    },
//     name: DataTypes.STRING,
//     address: DataTypes.STRING,
//     location: DataTypes.STRING,
//     capacity: DataTypes.INTEGER,
//     phone: DataTypes.STRING,
//     cost: DataTypes.DECIMAL
//   },
//   {
//     timestamps: false
//   }
// );
//   return Venue;
// };

const orm = require('../config/orm.js');

let venue = {
  all: function(cb){
    orm.selectAll("venues", function(res) {
      cb(res);
    })
  },
}

module.exports = venue;
