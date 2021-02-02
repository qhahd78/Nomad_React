import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';
// React.Component 클래스를 상속 받음.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async 는 getMovies() 가 비동기임을 말함. 
  getMovies = async () => {
    // eslint-disable-next-line
    
    // const movies = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f6649d26347bb450475cfb25dee1dd41');
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')

    const {
      data: {
        data: {movies},
      },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };
  // 영화 데이터 로딩
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // 삼항 연산자. isLoading 이 true 면 왼쪽을, false 면 오른쪽을 반환한다. 
    // We are ready 부분에 영화 데이터 출력. 
    return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : ( 
            <div className="movies">
                {movies.map(movie => (
                  <Movie 
                    genres={movie.genres}
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                ))}
            </div>
          )}
        </section>
      );
    }
}

export default App;
