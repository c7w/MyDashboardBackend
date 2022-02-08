import db from '../data/config.js'
import { DataTypes } from "sequelize";
const User = db.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    credit1: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit2: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit3: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit4: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit5: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit6: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit7: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit8: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
    credit9: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
    },
}, {
    // Other model options go here
});

User.sync({ alter: true });

export default User;