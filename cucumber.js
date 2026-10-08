module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['steps/**/*.js', 'support/**/*.js'],
    format: ['html:reports/cucumber-report.html', 'progress'],
    publishQuiet: true
  }
};