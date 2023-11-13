const express = require('express');
const routes = require('./src/routes')

const app =express ();

routes(server);

app.listen(8000, () => {
    console.log ('Server started in port 8000!');
})