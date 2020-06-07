const express = require("express");
const urls = require("../models/urls");
const router = express();

router.set('view engine' , 'ejs')

router.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

router.post("/", async (req, res) =>{
  await urls.create({ fullUrl: req.body.FullUrl });
  const query = await urls.findOne({ fullUrl: req.body.FullUrl });
  res.render("index.ejs", { shortUrl: query });
});

router.get("/:url", async (req, res) => {
  const query = await urls.findOne({ GeneratedUrl: req.params.url });

  if (query == null) {
    res.sendStatus(404);
  } else {
    res.redirect(query.fullUrl);
  }
});

module.exports = router;
