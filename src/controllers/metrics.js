const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');

router.get('/', (req, res) => {
  res.json(metricsService.getMetrics());
});

module.exports = router;