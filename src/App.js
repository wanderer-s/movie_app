import React from 'react';
import Movie from './Movie'
import "./App.css"

class App extends React.Component {
  state = {
    isLoading:true,
    movies: []
  }

  async componentDidMount() {
    const {data} = await fetch("https://yts-proxy.now.sh/list_movies.json")
    .then(res=> res.json())
    this.setState({movies:data.movies, isLoading:false})
  }

  render() {
    const { isLoading, movies } = this.state
    return (
    <section className="container">
      {isLoading? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}>
            </Movie>
          ))}
        </div>
      )}
      </section>
    )
  }
}
export default App;

//constructor -> render -> componentDidUpdate

//redner -> componentDidMount(1) -> render -> componentDidUpdate-> render -> componentDidUpdate