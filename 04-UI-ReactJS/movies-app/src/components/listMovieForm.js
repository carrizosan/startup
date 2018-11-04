import React from 'react';
import Movie from './movie.js';
import '../index.css';

class ListMovieForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movies = [];
    this.props.movies.forEach(movie => {
      movies.push(
        <Movie title={movie.title}
               year={movie.year}
               duration={movie.duration}
               id={movie.id}
               key={movie.id}
               handleDeleteButton={this.props.handleDeleteMovie}
               handleRadioChange={this.props.handleEditMovie} />    
        );
    });
    return (
      <ul className="list">
        {movies}
      </ul>
    );
  }

}

export default ListMovieForm;