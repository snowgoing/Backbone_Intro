var $ = require('jquery');
var Films = require('./collections/Films');
var Film = require('./models/film');

var $form = $("#filmForm");

var Filmtemplate = require('../Templates/template.html');


$form.on('submit', function (e) {
  e.preventDefault();

  var film = new Film({});

  film.set({
    'Title': $("#title").val(),
    'Year_Released': $("#year_released").val(),
    'Score': $("#score").val()
  });

  

  $("#showFilm").html(film.get('Title'));
  
  film.save();
});

Films.fetch({
  success: function (films) {
    console.log(films.toJSON());
    var data = {films:films.toJSON()}
    $('#listFilms').html(Filmtemplate(data));
      
   } 
  })

// $("#listFilms").html(Mustache.render(Filmtemplate, ));

