/**
 * es6 modules and imports
 */
const $ = require('jquery');
import loadingMessage from './hello';
loadingMessage();
/**
 * require style imports
 */
const {getMovies} = require('./api.js');


getMovies()
    .then((movies) => {
        $('#loading').show();
        $('.main').append(`<pre>Here are all the movies:</pre>`);
        movies.forEach(({title, rating, id}) => {
            $('.card-group').append(`<div class="card">
                <div class="card-body">
                  <button class="deleteMovie float-right btn-sm border-0"><small><i class="far fa-trash-alt"></i></small></button>
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

$('.deleteMovie').click(function () {
    $(this).parent().hide();
});

$('.addMovie').click(function () {

});