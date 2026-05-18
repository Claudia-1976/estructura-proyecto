'use strict';


module.exports = (sequelize,DataTypes) => {

  let  Cliente_producto = sequelize.define('cliente_producto', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    freezeTableName: true
  });

  Cliente_producto.associate = models => {
    //relaciones
    Cliente_producto.belongsTo(models.cliente)
    Cliente_producto.belongsTo(models.producto)
  }

  return Cliente_producto;
};