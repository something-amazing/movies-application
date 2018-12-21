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
        $('.container').append('<pre>Here are all the movies:</pre>');
        movies.forEach(({title, rating, id}) => {
            $('.container').append(`<pre>${title} - rating: ${rating}</pre>`);
        })
        $('#loading').hide()
    })
    .catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
            $('#loading').hide();
    });
