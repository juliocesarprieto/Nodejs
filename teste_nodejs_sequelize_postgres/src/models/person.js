module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Persons', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    return Person;
}