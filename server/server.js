const express = require('express'),
	  path    = require('path');

const app = express();

//HOSTING

app.use(express.static(`${__dirname}/../build`));

app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

//

app.listen(3300, () => console.log('Working on port 3333'));