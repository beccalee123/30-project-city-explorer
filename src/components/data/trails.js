import React from 'react';


/**
 *
 *
 * @function Trails - Renders html markup for Trails component.
 * @params (props)
 */
const Trails = (props) => {
  
 return(
 <section>
  <h3>Results from the Hiking Project API</h3>
  <ul className="trails-results">
  { props.trails.map((trail, idx) => 
      <li> 
        <p>Hike Name: <a href={trail.trail_url}>{trail.name}</a>, Location: {trail.location}, Distance: {trail.length} miles</p>
        <p>On {trail.condition_date} at {trail.condition_time}, trail conditions were reported as: {trail.conditions}</p>
        <p>This trail has a rating of {trail.stars} stars (out of {trail.star_votes} votes)</p>
        <p>{trail.summary}</p>

      </li>
  ) }  
  </ul>
</section>
 );
}

export default Trails;