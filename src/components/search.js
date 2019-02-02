import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = { search: '', value: ''}
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {value} = this.state;
        this.setState({search: value, value: ''});
        console.log(this.state.search);
    }

    render(){
        return(
            <React.Fragment>
                <main>
                    <form onSubmit={this.handleSubmit} id='search-form'>
                        <label for='search'>Search for a location</label>
                        <input onChange={this.handleChange} type='text' placeholder='Enter a location here' name='search' id='input-search' />
                    <button onSubmit={this.handleSubmit}>Explore!</button>
                    </form>
                </main>
            </React.Fragment>
        )
    }
}

export default Search;