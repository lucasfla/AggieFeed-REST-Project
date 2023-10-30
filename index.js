const express = require('express');
const app = express();

app.get('/posts', (req, res) => {


    const getPosts = async () => {
        const response = await fetch('https://aggiefeed.ucdavis.edu/api/v1/activity/public?s=0&l=10');
        const data = await response.json();
        // console.log(data);
        res.send(data);
    };
    getPosts();

    
});


app.listen(8080, () => console.log("Listening on port 8080"));