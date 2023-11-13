const composerLocator= require( "../../services/serviceLocator/composerLocator")

async function getUserController(){
const getUsersInstance = composerLocator.getUsersInstance();
const {
    rows,
    fields
 } = await getUsersInstance.getUsers();

 return{
    rows, 
    fields
 };
}

module.exports = {
    getUserController
}