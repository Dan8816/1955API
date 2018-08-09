const users = require('./../controllers/users.js')();

module.exports = function(app) {
	app.get('/users', function(req, res) {
		users.index(req, res);
	})
	app.post('/users', function(req, res) {
		users.create(req, res);
	})
	app.delete('/users/:name', function(req, res) {
		users.remove(req, res);
	})
	app.get('/users/:id', function(req, res) {
		users.show(req, res);
	})
	app.put('/users/:id', function(req, res){
		users.update(req, res)
})
}