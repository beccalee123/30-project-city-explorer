import React from 'react';

const Yelp = (props) => {
  
 return (
   <section className="yelp-container">
   <h3>Results from the Yelp API</h3>
   <ul className='yelp-results'>
     { props.yelp.map((data, idx) => 
      <li>
        <a href={data.name}>{data.name }</a>
        <p>The average rating is {data.rating} out of 5 and the average cost is $${data.price} out of 4</p>
        <img src={data.image_url} alt="yelp" />
      </li>
        ) }
    </ul>
    </section>
 )
}

export default Yelp;