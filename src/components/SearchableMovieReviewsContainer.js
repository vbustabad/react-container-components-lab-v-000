import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(data => this.setState({reviews: data.results}));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label> Search Term: </label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit"> Submit </button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;