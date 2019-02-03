import React from 'react';
import superagent from 'superagent';


const render = (condition = false, children = null) => {
   console.log(condition, !!condition);
   console.log('children', children);
    return !!condition ? children : null;
  };
export const When = props => render(props.condition, props.children);


class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dataBody: {}, 
            moviesBody: {},
            yelpBody: {},
            trailsBody: {},
            meetupsBody: {},
            weatherBody: {}
            }

    }



    handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'https://city-explorer-backend.herokuapp.com'
        let searchQuery = e.target.inputSearch.value;
        let data = await superagent.get(`${url}/location`).query({data:searchQuery});
        console.log('data is: ', data);
        this.setState({dataBody : data.body});

        let weather = await superagent.get(`${url}/weather`).query({data:data.body});
        console.log(weather.body);
        this.setState({weatherBody : weather.body});

        let movies = await superagent.get(`${url}/movies`).query({data:data.body});
        console.log(movies.body);
        this.setState({moviesBody : movies.body});

        let yelp = await superagent.get(`${url}/yelp`).query({data:data.body});
        console.log(yelp.body);
        this.setState({yelpBody : yelp.body});
        
        let meetups = await superagent.get(`${url}/meetups`).query({data:data.body});
        console.log(meetups.body);
        this.setState({meetupsBody: meetups.body});

        let trails = await superagent.get(`${url}/trails`).query({data:data.body});
        console.log(trails.body);
        this.setState({trailsBody: trails.body});
    
        console.log("this is state:", this.state);
    }

    

    render(){
        console.log(this.state.dataBody && this.state.dataBody.id);
       
        return(
            <React.Fragment>
                <main>
                    <form onSubmit={this.handleSubmit} id='search-form'>
                        <label htmlFor='search'>Search for a location</label>
                        <input type='text' placeholder='Enter a location here' name='search' id='inputSearch' />
                    <button onSubmit={this.handleSubmit}>Explore!</button>
                    </form>

                    <When condition={this.state.dataBody && this.state.dataBody.id}>
                       <img id='map' src={ `https://maps.googleapis.com/maps/api/staticmap?center=${this.state.dataBody.latitude}%2c%20${this.state.dataBody.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`}
                        alt='Map'/>
                        <h2 class="query-placeholder">Here are the results for {this.state.dataBody.formatted_query}</h2>
       
                    </When>
                   
                   <When condtion={this.state.dataBody && this.state.dataBody.id}>

                   </When>


                </main>
            </React.Fragment>
        )
    }
}

export default Search;

//