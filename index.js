require('dotenv').config()

const express = require("express");
const app = express();
const port = 4000;

const GithubData= {
    "login": "subho174",
    "id": 193519459,
    "node_id": "U_kgDOC4jfYw",
    "avatar_url": "https://avatars.githubusercontent.com/u/193519459?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/subho174",
    "html_url": "https://github.com/subho174",
    "followers_url": "https://api.github.com/users/subho174/followers",
    "following_url": "https://api.github.com/users/subho174/following{/other_user}",
    "gists_url": "https://api.github.com/users/subho174/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/subho174/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/subho174/subscriptions",
    "organizations_url": "https://api.github.com/users/subho174/orgs",
    "repos_url": "https://api.github.com/users/subho174/repos",
    "events_url": "https://api.github.com/users/subho174/events{/privacy}",
    "received_events_url": "https://api.github.com/users/subho174/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Subhodip",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-01-02T16:51:19Z",
    "updated_at": "2025-02-01T07:34:55Z"
  }

  app.get("/github", (req, res) => {
    res.json(GithubData);
  })
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
    res.send("subho.com");
})

app.get('/login', (req, res) => {
    res.send("<h1>Log In here</h1>");
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
