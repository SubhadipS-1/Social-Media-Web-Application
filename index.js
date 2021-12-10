const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log('There is an error occurred in the server', port);
    }

    console.log('My express server is running on the port:', port);
});
