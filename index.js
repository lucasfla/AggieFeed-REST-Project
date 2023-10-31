const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
    const getPosts = async () => {
        try {
            const response = await fetch('https://aggiefeed.ucdavis.edu/api/v1/activity/public?s=0&l=10');
            if (response.ok) {
                const data = await response.json();
                let posts = [];
                data.map((post) => {
                    const new_post = {
                        "id" : post.id,
                        "published" : post.published,
                        "title" : post.title,
                        "actor" : {
                            "displayName" : post.actor.displayName
                        }
                    }
                    posts.push(new_post);
                });
                res.send(posts);
            } else {
                res.send({"Error" : response.statusText});
            }
        } catch (error) {
            res.send({"Error" : error});
        }
    };
    getPosts();
});

app.listen(8080, () => console.log("Listening on port 8080"));