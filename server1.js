
	var port = 5000;
	var express = require('express');
	var body_parser = require('body-parser');
	var app = express();

	app.use(body_parser());
 /* serves main page */

	app.get("/app/users", function(req, res) {
	if (req.query.filter){
		res.send("List of Users matching" + req.query.filter + "Handled by JOey" );
	}
	else {
		res.send ('List of users handled by joey');
	}
	});
	
	app.get("/app/users/:name", function(req, res) {
		res.send("GET " + req.params.name+ " user handled by joey");
	});
	
	app.get("/app/users?filter=sex='f'", function(req, res) {
		res.send('GET handled by joeyXXX');
	});
	
	//app.post("/app/users",function(req, res) { 
    //res.send('blah blah blahx')
	/* some server side logic */
   
  // res.send(req.body.Fname + " " + req.body.Lname);
  //});
	app.use(express.static(__dirname));
 

 //var port = process.env.PORT || 5000;
 app.listen(port, function() {
  console.log("Listening on " + port);
 });	