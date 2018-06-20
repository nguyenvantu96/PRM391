var express = require('express');
var router = express.Router();
const table_question = require('../public/javascripts/dao/db_table_question');
/* GET home page. */
router.get('/', function(req, res, next) {
  table_question.findAll({
    plain:false
  }).then(data =>{
    // let data_result = data.map(result => result.toJson());
    res.end(JSON.stringify(data));
  })
});

module.exports = router;
