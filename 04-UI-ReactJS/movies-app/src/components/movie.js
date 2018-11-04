import React from 'react';
import '../index.css';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleDeleteButton(this.props.id);
    }

    handleRadioChange(e) {
        this.props.handleRadioChange(e.target.value);
    }

    render() {
        return (
            <li className="movie">
                <p>Title: {this.props.title}</p>
                <p>Year: {this.props.year}</p>
                <p>Duration: {this.props.duration}</p>
                <p>ID: {this.props.id}</p>
                <button type="submit" name="delete" onClick={this.handleClick}> Delete </button>
                <input type="radio" id="edit" name="edit" value={this.props.id} onChange={this.handleRadioChange}/>
                <label>Edit this movie </label>
            </li>
        );
    }

}

export default Movie;