var connection_db = require('./db_connect_mysql');
const Sequelize = require('sequelize');

const Question = connection_db.define('question',{
    question:{type:Sequelize.STRING},
    answer:{type:Sequelize.STRING}
});

Question.sync();
module.exports = Question;