const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log("Je passe par la route /");
  res.render('index.hbs');
});


module.exports = router;
