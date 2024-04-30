
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors({
    origin: "*"
}))



app.get('/getUser', (req, res) => {
    res.json({
        name: "User",
        email: "john@example.com"
    });
});

app.get('/getUser2', async (req, res) => {
    const API_KEY = "f636772ba1444311bb6ae448299fefd5"
    let newsLink = `https://newsapi.org/v2/everything?q=election&apiKey=${API_KEY}`;
    let query = req.query.query;
    if (query != undefined) {
        newsLink = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    }

    let x = await axios.get(newsLink);
    let data = await x.data;
    res.json(data);
});

app.listen(4000, () => {
    console.log("listening to port http://localhost:4000")
})

