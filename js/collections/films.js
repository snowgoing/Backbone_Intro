var Backbone = require('../backbone-parse');
var FilmModel = require('../models/film');

var FilmsCollection = Backbone.Collection.extend({
  model: FilmModel,
  _parse_class_name: 'Film'
});

var Films = new FilmsCollection();

module.exports = Films;