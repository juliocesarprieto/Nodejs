module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Clients', {
        name: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        address: DataTypes.STRING,
        
    });

    return Client;
}