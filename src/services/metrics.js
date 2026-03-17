class MetricsService {
  getMetrics() {
    return [
      { id: 1, name: 'Metric 1', value: 10 },
      { id: 2, name: 'Metric 2', value: 20 },
      { id: 3, name: 'Metric 3', value: 30 }
    ];
  }
}

module.exports = new MetricsService();