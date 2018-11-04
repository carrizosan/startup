import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieForm from './components/movieForm.js';
import ListMovieForm from './components/listMovieForm.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      editIsChecked: false // False: if edit radio is no checked, else this state gets the id of the movie to edit
    }
    this.addMovie = this.addMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.callEditMovie = this.callEditMovie.bind(this);
  }

  addMovie(newMovie) {
    if(newMovie.title && newMovie.year && newMovie.duration) {  // Only adds movie if all fields are complete
      let movieArray = this.state.movies.slice();
      if(movieArray.length > 0){
        let lastMovie = movieArray[movieArray.length-1];
        newMovie.id = lastMovie.id + 1;    // easy way to get a no-repeat id (can use deleted movies id)
      }else{
        newMovie.id = 1;
      }
      movieArray.push(newMovie);
      
      this.setState({
        movies: movieArray
      });
    } else {
      console.log("Please complete all the fields");
    }
  }
    

  editMovie(id, newData) {
    var moviesArray = this.state.movies.slice();

    moviesArray.array.forEach(element => {
      if(element.id == id){
        if(newData.title){                    // Only edits the complete fields
          element.title = newData.title;
        }
        if(newData.year){
          element.year = newData.year;
        }
        if(newData.duration){
          element.duration = newData.duration ;
        }
      }
    });
      
    this.setState({
      movies: moviesArray
    });
  }

  callEditMovie(id) {
    this.setState({
      editIsChecked: id   // when this state gets an id, the edit form is shown
    });
  }

  deleteMovie(id) {
    var moviesArray = this.state.movies.slice();
    moviesArray.forEach(function(element, index){
      if(element.id === id){
        moviesArray.splice(index, 1);
      }
    });
    this.setState({
      movies: moviesArray
    })    
  }

  render() {
    const movies = this.state.movies;
    const edit = this.state.editIsChecked;   // The id of the movie to edit, or false
    
    if(edit){   // if edit radio is selected, the edit form is shown
      return(
        <div className="app">
          <div className="new-movie">
            <h3>New Movie</h3>
            <MovieForm onSubmitButton={this.addMovie} action="add"/>
          </div>
          <div className="edit-movie">
            <h3>Edit Movie</h3><p><i>Editing movie ID:<b> {edit}</b> </i></p>
            <MovieForm id={edit} isEditChecked={edit} onSubmitButton={this.editMovie} action="edit"/>
          </div>
          <div className="list-movie">
            <ListMovieForm movies={movies} handleDeleteMovie={this.deleteMovie} handleEditMovie={this.callEditMovie}/>
          </div>
          
        </div>
      );
    }
    else {    // else I only show add and list forms
      return(
        <div className="app">
          <div className="new-movie">
            <h3>New Movie</h3>
            <MovieForm onSubmitButton={this.addMovie} action="add"/>
          </div>
          <div className="list-movie">
            <ListMovieForm movies={movies} handleDeleteMovie={this.deleteMovie} handleEditMovie={this.callEditMovie}/>
          </div>
        </div>
      );
    }
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);