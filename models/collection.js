module.exports = function (sequelize, DataTypes) {
    const Collection = sequelize.define(
        'Collection',
        {

        }
    );

    Collection.associate = function (models) {
        Collection.hasMany(models.Game, {
            onDelete: 'cascade'
        });

        Collection.belongsTo(models.User)
    };

    return Collection
}