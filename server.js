const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const config = require('./config/config.js');

app.use(cors({
  origin: `http://localhost:${PORT}`
}));

app.get('/config.json', (req, res) => {
  res
    .status(200)
    .json(config);
});


app.use('/', express.static(path.resolve('build')));
app.use('/*', express.static(path.resolve('build/index.html')));



app.listen(PORT, (error) => {
  if (error) throw (error);
  console.info(`==> Server started on ${PORT}`);
});
