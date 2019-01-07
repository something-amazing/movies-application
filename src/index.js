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
        $('.main').append(`<div><pre class="text-white">Here are all the movies:</pre></div>`);
        movies.forEach(({title, rating, id}) => {
            $('.card-group').append(`<div class="card bg-transparent text-white border-white">
                <div class="card-body">
                  <button class="delete btn btn-secondary" value="${id}"><small><i class="far fa-trash-alt"></i></small></button>
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small class="text-white">Rating: ${rating}</small></p>
            </div>`);
        });
        $('#loading').hide();
    })
    .catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
            $('#loading').hide();
    });


$('.delete').on('click','.delete',function (event) {
    const id = $(event.target).val();
    console.log(id);
    deleteMovie(id);

});

$('#addMovie').click(function (e) {
    e.preventDefault();
    const name = $('#movieName').val();
    const rating = $('#movieRating').val();
    addMovie(name,rating);
    location.reload();
});


