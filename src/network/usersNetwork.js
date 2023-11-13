const express = require ("express");
const Controller = require ("../controllers/users")

const router = express.Router();

function getUsers(request, response){
    Controller.getUserController()


}

router.get("/" , getUsers);

module.exports = router;