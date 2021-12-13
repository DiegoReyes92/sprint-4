// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(movie => movie.director === director);
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter ( movie => movie.director === director);
  let result = moviesDirector.reduce((a, b) => a.score + b.score)/(moviesDirector.length).toFixed(2);
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let orderTitle = array
    .map(movie => movie.title)
    .sort((a, b) => (a > b ? 1 : -1))
    .slice(0, 20);
  console.log("EXERCICE 4 ->", orderTitle);
  return orderTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderYear = array
    .map(movie => movie)
    .sort((a, b) => (a.year > b.year ? 1 : -1))
    .slice(0, 20)
    .map(movie => {
      const {year, title} = movie;
      console.log(movie);
      const ordered = [{title: title, year: year}];
      return ordered[0];
    });
  console.log("EXERCICE 5 ->", orderYear);
  return orderYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesCategory = array.filter(movie => movie.genre.includes(category) && movie.score);
  let result = moviesCategory.reduce((a, b) => a.score + b.score) / (moviesCategory.length).toFixed(2);
  if (moviesCategory.length.toFixed(2) > 1) {
    return result;
  }
  console.log("EXERCICE 6 ->", moviesCategory[0].score);
  return moviesCategory[0].score;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let bestFilm = movies
    .filter((movie) => movie.year === year)
    .sort((a, b) => (a.score < b.score ? 1 : -1));
    console.log(bestFilm);
  const movieArray = [bestFilm[0]];
  console.log("EXERCICE 8 ->", movieArray);
  return movieArray;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
