module.exports = {
      getMovies: () => {
        return fetch('/api/movies')
        .then(response => response.json());
      },
      deleteMovie: (id) => {
          return fetch(`/api/movies/${id}`, {
              method: 'DELETE',
          })
      },
      addMovie: (name, rating) => {
          return fetch('/api/movies', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  title : name,
                  rating: rating
              })
          });
      },
      editMovie: () => {

      }

};


