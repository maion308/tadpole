const express = require('express');
const cors = require('cors')
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3001;
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
const path = require('path')

// app.g('/api', (req, res) => res.send('hello'))
app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));