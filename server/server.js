const express = require('express'),
	  path    = require('path');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3333, () => console.log('Working on port 3333'));