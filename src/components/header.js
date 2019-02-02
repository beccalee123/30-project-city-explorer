import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <React.Fragment>
                <header>
                <h1>City Explorer</h1>
                <p>Enter a location below to learn about the weather, events, restaraunts, movies filmed there, and more!</p>
                </header>   
            </React.Fragment>
        )
    }
}

export default Header;