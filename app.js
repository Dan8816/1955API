const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(PORT, ()=> {
	console.log(`listening on port: ${PORT}`)
});