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
			NewUser = new User(req.body)
			NewUser.save(function(err){
				if(err){
					console.log("**********Hit a creation error**********");
					res.json(err);
				}else {
					console.log("**********Successful creation**********");
					res.json(NewUser);
				}
			})	
		},
		remove: function(req, res) {
			User.remove({_id: req.body}, function(err, users) {
				if(err) {
					console.log("**********Hit an error**********")
					res.send("<h1>Hit an error</h1>" + users);
				} else {
					console.log("**********Successful removed user**********")
					res.redirect('/users');
				}
			}
		)
		},
		show: function(req, res) {
			User.findOne({_id: req.params.id}, function(err, users) {
				if(err) {
					console.log("**********Show error**********");
					res.send(err);
				} else {
					res.json(users);
				}
			}
		)},
		update: function(req, res){
			console.log("*********hitting the update route**********");
			User.update({_id: req.params.id}, req.body, function(err){
				if (err) {
					console.log("*********update error*********");
					res.json({message: "failed"});
				}else{
					console.log("**********Successful update*********");
					res.json({message: "success"});
				}	
			})
		}
	}
});
