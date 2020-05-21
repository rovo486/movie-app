import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
 
class App extends Component {
  
state = {}

// componentDidMount(){
//   setTimeout(() => {
//     this.setState({
//       movies: [  
//         { 
//           title:"Matrix1",
//           poster:"https://lh3.googleusercontent.com/proxy/PcsV8Ovtp8p0se3xLZIIoandIZNRYO5aBl6S2seA9y7AcY062XZr7vs6zGUndOkdO0CB23TVgNDTyV0yYHF4JcG1KZBdf2juMY-fMYdjdyM"
//         }, 
//         { 
//           title:"Matrix2",
//           poster:"https://debatingday.com/wp/wp-content/uploads/2019/10/20191008_071822.jpg"
//         },  
//         { 
//           title:"Matrix3",
//           poster:"https://lh3.googleusercontent.com/proxy/PcsV8Ovtp8p0se3xLZIIoandIZNRYO5aBl6S2seA9y7AcY062XZr7vs6zGUndOkdO0CB23TVgNDTyV0yYHF4JcG1KZBdf2juMY-fMYdjdyM"
//         }, 
//         { 
//           title:"Matrix4",
//           poster:"https://debatingday.com/wp/wp-content/uploads/2019/10/20191008_071822.jpg"
//         },
//         {
//           title: "Transpoting",
//           poster: "https://lh3.googleusercontent.com/proxy/3-RU5G1mc_AYtMGH7n643PTr55Jv5b-ndB38Hucw0Gfn6ZhyJbAKFGLQSP466t7pCS8JElj5a2kaVEKh6xUA9HvrC1RKuVkqlDmiONxBeKOPCHGEYHiz"
//         },
//         // ...this.state.movies,
//       ]
//     })
//   }, 2000)
// }

componentDidMount(){ 
  this._getMovies();
}

_renderMovies = () => {
  const movies =  this.state.movies.map((movie) => {
    return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
    />
  })
  return movies
}

_getMovies = async () => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => {
  // fetch('https://yts.ag/api/v2/list_movies.json')
  return fetch('api/v2/list_movies.json?sort_by=download_count')
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}

render() {  
  return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
  }
}

export default App;
