const users = require('./../controllers/users.js')

module.exports = function(app) {

	app.get('/', function(req, res) {
		users.index(req, res);
	})
	app.get('/add/:name', function(req, res) {
		users.create(req, res);
	})

	app.get('/remove/:name', function(req, res) {
		users.remove(req, res);
	})
	app.get('/:name', function(req, res) {
		users.show(req, res);
	})
}