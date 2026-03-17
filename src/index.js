const express = require('express');
const app = express();
const port = 3000;
const metricsController = require('./controllers/metrics');

app.use('/metrics', metricsController);

app.listen(port, () => {
  console.log(`Aero API listening on port ${port}`);
});