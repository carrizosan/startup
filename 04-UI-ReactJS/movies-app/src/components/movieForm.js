import React from 'react';

class MovieForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            year : '',
            duration : '',
            id : -1
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const movie = {
            title: this.state.title,
            year: this.state.year,
            duration: this.state.duration,
            id: this.state.id
        };
        if(e.target.name === "add"){
            this.props.onSubmitButton(movie);
        }else 
        if (e.target.name === "edit"){
            this.props.onSubmitButton(this.props.id, movie);
        }
        
    }   
    
    render() {
        return (
            <form>
                <label>
                    Title:
                    <input type="text" name="title" onChange={this.handleInputChange} value={this.state.title}/>
                </label>
                <label>
                    Year:
                    <input type="number" name="year" onChange={this.handleInputChange} value={this.state.year}/>
                </label>
                <label>
                    Duration:
                    <input type="number" name="duration" onChange={this.handleInputChange} value={this.state.duration}/>
                </label>
                <button type="submit" name={this.props.action} onClick={this.handleSubmit}>{this.props.action.toUpperCase()}</button>
            </form>
        );
    }

}

export default MovieForm;