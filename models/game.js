module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define(
        'Game',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }
    );

    Game.associate = function (models) {
        Game.belongsTo(models.Collection, {
            onDelete: 'cascade'
        });
    }

    return Game
}