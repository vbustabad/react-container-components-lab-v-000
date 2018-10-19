import React from 'react';

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(
  function(review){
    return (
      <div className="review">
        <h3>Title: {review.display_title}</h3>
        <p>MPAA Rating: {review.mpaa_rating}</p>
        <p>Critics' Pick: {review.critics_pick}</p>
        <p>Summary: {review.summary_short}</p>
      </div>
      )
    })  
  }</div>;


export default MovieReviews;
