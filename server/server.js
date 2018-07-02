const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.listen(3005, () => console.log('Working on port 3005'));