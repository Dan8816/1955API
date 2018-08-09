var mongoose = require('mongoose');
User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(req, res) {
			User.find({}, function(err, users) {
				if(err){
					console.log("**********Hit error**********")
					res.json(err);
				} else {
					console.log("**********Return query result**********")
					res.json(users);
				}
			})
		},
		create: function(req, res) {
			console.log("**********Hitting the create route**********")
			NewUser = new User(req.params)
			NewUser.save(function(err){
				if(err){
					console.log("**********Hit a creation error**********");
					res.json(err);
				}else {
					console.log("**********Successful creation**********");
					res.redirect('/');
				}
			})	
		},
		remove: function(req, res) {
			User.remove({name: req.params.name}, function(err, users) {
				if(err) {
					console.log("**********Hit an error**********")
					res.send("<h1>Hit an error</h1>" + users);
				} else {
					console.log("**********Successful removed user**********")
					res.redirect('/');
				}
			}
		)
		},
		show: function(req, res) {
			User.find({name: req.params.name}, function(err, users) {
				if(err) {
					console.log("**********Show error**********");
					res.send('<h1>Show error</h1>' + err);
				} else {
					res.json(users);
				}
			}
		)
		},

	}
})();
