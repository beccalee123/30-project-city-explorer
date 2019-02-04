import React from 'react';
import superagent from 'superagent';
import Weather from './data/weather';
import Yelp from './data/yelp';
import Meetup from './data/meetup';
import Movies from './data/movies';
import Trails from './data/trails';
import When from './when.js';


/**
 *
 *
 * @class Search creates a 'Search' component for searching APIs (Google location (maps), Dark Sky, Yelp, Meetups, Movies DB, Trails) and rendering results once data is received. State for <Search /> defined in constructor and state is passed to relevant components.  Components rendered within Search Component: <Weather />, <Yelp />, <Meetups />, <Movies />, <Trails />.
 * @extends {React.Component}
 */
class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataBody: {},
			weather: []
		}

	}

	/**
     *
     * @method handleSubmit - async method that is triggered on submit and is passed an event.  On submission event, API calls for location (google map), weather, movies, yelp, meetups, and trails are made.  State is set.
     * @memberof Search - handles submission of form.  
     */
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

	/**
     *
     *
     * @returns - rendered data from components.
     * @memberof Search
     */
    render() {
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
