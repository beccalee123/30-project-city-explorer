import React from 'react';

/**
 *
 *
 * @function Meetup - Renders html markup for Meetup component.
 * @params (props)
 */
const Meetup = (props) => {
  
  console.log('data from meetup', props.meetups);
 return(
 <section>
  <h3>Results from Meetup API</h3>

  <ul className="meetups-results">
  { props.meetups.map((event, idx) => 
      <li>
        <a href={event.link}>{event.name}</a>
        <p>Hosted by: {event.host}</p>
        <p>Created on: {event.creation_date}</p>
      </li>
  ) }  
  </ul>

</section>
 );
}

export default Meetup;