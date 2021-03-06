'use strict';

var packageModel = require('./package1-packagemodel');

module.exports = {
  package: packageModel,
  params: {
    lang: 'en',
    theme: null,
    measures: [],
    groups: [],
    series: [],
    rows: [],
    columns: [],
    filters: {},
    orderBy: {},
    visualizations: [],
    drilldown: [],
    packageId: 'Package1',
    countryCode: 'CM',
    dateTimeDimension: 'date_2.Annee',
    babbageApiUrl: 'http://api.example.com',
    cosmopolitanApiUrl: 'http://cosmopolitan.example.com',
    source: undefined,
    target: undefined
  },
  history: {
    items: [],
    hasNext: false,
    hasPrev: false
  }
};
