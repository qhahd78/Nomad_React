import React from 'react';
import axios from 'axios';
// React.Component 클래스를 상속 받음.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = () => {
    const movies = axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f6649d26347bb450475cfb25dee1dd41');
  }
  // 영화 데이터 로딩
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    // 삼항 연산자. isLoading 이 true 면 왼쪽을, false 면 오른쪽을 반환한다. 
    // We are ready 부분에 영화 데이터 출력. 
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
