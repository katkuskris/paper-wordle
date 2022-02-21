let express = require('express');
let router = express.Router();
let test = require('../public/javascripts/paper-wordle')
const fs = require('fs')


/* GET home page. */
router.get('/', async function(req, res, next) {
  const content = fs.readFileSync('./public/files/solutions.txt', 'utf8');
  let contentarr = content.split(/\r?\n/)
  let sol1 = contentarr[Math.floor(Math.random() * contentarr.length)]
  let sol2 = contentarr[Math.floor(Math.random() * contentarr.length)]
  while (sol1 == sol2) {
    sol2 = contentarr[Math.floor(Math.random() * contentarr.length)]
  }
  let grids = test(sol1, sol2)
  res.render('index', {guessGrid: grids[0], clueGrid1: grids[1], clueGrid2: grids[2] })
});

module.exports = router;
