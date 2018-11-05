var Post = require('./model/post');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all posts
	app.get('/api/posts', function(req, res) {

		// use mongoose to get all posts in the database
		Post.find(function(err, posts) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(posts); // return all post in JSON format
		});
	});

	// create post and send back all posts after creation
	app.post('/api/posts', function(req, res) {

    console.log('body:' + req.body.title);
		// create a post, information comes from AJAX request from Angular
		Post.create({
			title : req.body.title,
			content : req.body.content
    },
    function(err, post) {
			if (err)
				res.send(err);

			// get and return all the posts after you create another
			Post.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});
	});

	// delete a posr
	app.delete('/api/posts/:post_id', function(req, res) {
		Post.remove({
			_id : req.params.post_id
		}, function(err, post) {
			if (err)
				res.send(err);

			// get and return all the posts after you create another
			Post.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('../dist/mean-mad/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};


