const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const product = require("./product")
const app = express();
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://pro:DDwiYcBcxZDXEHDR@cluster0.iqfprtk.mongodb.net/books")
  .then(() => {
    console.log('connected to db open');
  })
  .catch((err) => {
    console.log(err.message);
  });

  app.get("/", async (req, res) => {
    const products = await product.find({});
    res.send({products});
    console.log("yes");
  });

app.post("/addProduct", (req, res) => {
  console.log("post: "+ req.body)
  var mybook = new product(req.body);
  mybook.save().then(()=>{res.send("ok")})
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

