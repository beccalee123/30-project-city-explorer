import React from 'react';
import superagent from 'superagent';
import Weather from './weather';
import Yelp from './yelp';
import Meetup from './meetup';
import Movies from './movies';
import Trails from './trails';


const render = (condition = false, children = null) => {
    //console.log(condition, !!condition);
    //console.log('children', children);
    return !!condition ? children : null;
};
export const When = props => render(props.condition, props.children);


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataBody: {},
            weather: []
        }

    }



    handleSubmit = async (e) => {
        console.log('in submit');
        e.preventDefault();
        let url = 'https://city-explorer-backend.herokuapp.com'
        let searchQuery = e.target.inputSearch.value;
        let data = await superagent.get(`${url}/location`).query({ data: searchQuery });

        this.setState({ dataBody: data.body });
        let weather = await superagent.get(`${url}/weather`).query({ data: data.body });
        let movies = await superagent.get(`${url}/movies`).query({ data: data.body });
        let yelp = await superagent.get(`${url}/yelp`).query({ data: data.body });
        let meetups = await superagent.get(`${url}/meetups`).query({ data: data.body });
        let trails = await superagent.get(`${url}/trails`).query({ data: data.body });
        this.setState({
            weather: weather.body,
            movies: movies.body,
            yelp: yelp.body,
            meetups: meetups.body,
            trails: trails.body
        });
    }



    render() {
        //console.log(this.state.dataBody && this.state.dataBody.id);
           console.log("movies",this.state.movies);

        return (
            <React.Fragment>
                <main>
                    <form onSubmit={this.handleSubmit} id='search-form'>
                        <label htmlFor='search'>Search for a location</label>
                        <input type='text' placeholder='Enter a location here' name='search' id='inputSearch' />
                        <button>Explore!</button>
                    </form>

                    <When condition={this.state.dataBody && this.state.dataBody.id}>
                        <img id='map' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.dataBody.latitude}%2c%20${this.state.dataBody.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`}
                            alt='Map' />
                        <h2 className="query-placeholder">Here are the results for {this.state.dataBody.formatted_query}</h2>
                    </When>
                    <When condition={this.state.weather.length}>
                        <div className="column-container">
                            <Weather
                                weather={this.state.weather}
                            />
                            <Yelp
                                yelp={this.state.yelp}
                            />
                            <Meetup
                                meetups={this.state.meetups}
                            />
                            <Movies
                                movies={this.state.movies}
                            />
                            <Trails
                                trails={this.state.trails}
                            />
                            </div>
                    </When>

                </main>
            </React.Fragment>
        )
    }
}

export default Search;

//