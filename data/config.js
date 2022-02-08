import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize";

// Database Configurations Here
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite3',
    logging: false,
});

export default sequelize;