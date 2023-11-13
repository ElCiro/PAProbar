// database.js

const mysql = require('mysql2/promise');
require('dotenv').config()

class Database {

    static instance;

    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    static getInstance(){
        if (instance){
            return instance;
        }
        instance = new Database({
            host:process.env.WHATAPP_DB_HOST,
                user:process.env.WHATAPP_DB_USER,
                password:process.env.WHATAPP_DB_PASS,
               database:process.env.WHATAPP_DB_NAME,
        });
    }

    connect() {
        this.connection.connect(error => {
            if (error) {
                console.error('Error connecting to the database:', error);
                return;
            }
            console.log('Connected to the database');
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(error => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }
}

module.exports = Database;

//