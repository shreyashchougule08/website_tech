const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/news", async (req, res) => {
    let query = req.query.q;

    if (!query) {
        return res.json({ articles: [] });
    }

    try {
        let response = await fetch(
            "https://newsapi.org/v2/everything?q=" + query +
            "&language=en&sortBy=publishedAt&apiKey=aa80acf8ccac4c00a3ff0f0810c0eaae"
        );

        let data = await response.json();

        res.json(data);

    } catch (err) {
        console.log(err);
        res.json({ articles: [] });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});