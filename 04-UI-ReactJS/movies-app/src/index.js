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
      editIsChecked: false
    }
    this.addMovie = this.addMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.callEditMovie = this.callEditMovie.bind(this);
  }

  addMovie(newMovie) {
    if(newMovie.title && newMovie.year && newMovie.duration) {
      let movieArray = this.state.movies.slice();
      if(movieArray.length > 0){
        let lastMovie = movieArray[movieArray.length-1];
        newMovie.id = lastMovie.id + 1;
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

    moviesArray.forEach(function(element, index){
      if(element.id == id){
        if(newData.title){
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
      editIsChecked: id
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
    const edit = this.state.editIsChecked;
    
    if(edit){
      return(
        <div className="app">
          <div className="new-movie">
            <h3>New Movie</h3>
            <MovieForm onSubmitButton={this.addMovie} action="add"/>
          </div>
          <div className="edit-movie">
            <h3>Edit Movie</h3><p><i>Editing movie ID: {edit}</i></p>
            <MovieForm id={edit} isEditChecked={edit} onSubmitButton={this.editMovie} action="edit"/>
          </div>
          <div className="list-movie">
            <ListMovieForm movies={movies} handleDeleteMovie={this.deleteMovie} handleEditMovie={this.callEditMovie}/>
          </div>
          
        </div>
      );
    }
    else {
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