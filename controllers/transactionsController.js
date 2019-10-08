var db = require('./baseController').db;

// Defining methods for the TransactionsController
module.exports = {
  findAll: function(req, res) {
	db.user.findAll({}).then(function(user) {
            res.json(user);
        });
  },
};
