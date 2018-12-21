/**
 * es6 modules and imports
 */
const $ = require('jquery');
import loadingMessage from './hello';
loadingMessage();
/**
 * require style imports
 */
const {getMovies, deleteMovie, addMovie, editMovie} = require('./api.js');


getMovies()
    .then((movies) => {
        $('#loading').show();
        $('.main').append(`<div><pre>Here are all the movies:</pre></div>`);
        movies.forEach(({title, rating, id}) => {
            $('.card-group').append(`<div class="card">
                <div class="card-body">
                  <button class="deleteMovie float-right btn-sm border-0" type="submit" value="${id}"><small><i class="far fa-trash-alt"></i></small></button>
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small class="text-muted">${rating}</small></p>
            </div>`);
        });
        $('#loading').hide();
    })
    .catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
            $('#loading').hide();
    });

$('.deleteMovie').click(function (e) {
    e.preventDefault();
    let id = $(this).val();
    deleteMovie(id);

});

$('#addMovie').click(function (e) {
    e.preventDefault();
    let name = $('#movieName').val();
    let rating = $('#movieRating').val();
    addMovie(name,rating);
    location.reload();
});

$('#mybtn').click(function () {
    $('#myModal').css("display", "block");
});


