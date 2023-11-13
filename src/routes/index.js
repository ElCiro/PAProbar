const Routes = require("../utils/constanst/routes.json");

const UsersNetwork = require("../network/usersNetwork");
function routes(server){
    server.use(Routes.users , UsersNetwork)
}

module.exports = routes;