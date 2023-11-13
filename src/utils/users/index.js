const CryptoJS = require("crypto-js");
require('dotenv').config()
class Users {

    database;

    constructor(db){
        thisdatabase =db;
    }

    async getUsers(){
      const[rows, fields]= await this.database.query("SELECT * users");
    return{
        rows,
        fields
    };
    }
    async getUserById(){
        const[rows, fields]= await this.database.query("SELECT * users WHERE id = ?", [id]);
      return{
          rows,
          fields
      };
      }
    async getUserByEmail(){
        const[rows, fields]= await this.database.query("SELECT * users WHERE email = ?",[email]);
      return{
          rows,
          fields
      };
      }
    async createUser(user){
        const {
          name,
          email,
          password,
          lastNames
      }=user;

      const hash=CryptoJS.AES.encrypt(password, process.env.WHATSAPP_SECRET_KEY).toString();
    const[rows, fields]= await this.database.execute(
        "INSERT INTO users (names, lastNames, email, password) VALUES (?,?,?,?)",
        [names, lastNames, email, hash]
        );
        return{
            rows,
            fields
        };
}
    async deleteUser(){
    const[rows, fields]= await this.database.query("DELETE FROM users WHERE email = ?",[id]);
  return{
      rows,
      fields
  };
  }
}
module.exports =Users;