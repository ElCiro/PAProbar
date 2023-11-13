const serviceLocator = require("./dependencyLocator")
const databaseConnexion = require("../database")
const Users=require("../../utils/users")

const types = {
db: "databaseConexion",
user:"usersUtils"
}

class composerLocator{
    di = dependencyLocator.getInstance();

    constructor(){
        this.di.bindLazySingleton(types.users, ()=> new Users(db))
    }

    init(){
        
        const db = databaseConnexion.getInstance();
        this.di.bindFactory(types.db, ()=>db)
    }

    getUsersInstance(){
        const existsInstance = di.get(types.users);
        if(!existsInstance){
            const db = di.get(types.db)
            this.di.bindLazySingleton(types.users, ()=> new Users (db))
            return this.di.get(types.users)
        }
        return this.di.get(types.users)
    }

}

module.exports = new composerLocator;