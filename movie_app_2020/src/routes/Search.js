import React, { Component } from 'react';
import SearchMovie from '../components/SearchMovie';
import axios from 'axios';
import './Search.css';

class Search extends React.Component {
    state = {
        isLoading: true,
        movies:[],
        value: ""
    };


getSearchMovie = async() => {
    const ID_KEY = 'OlVUDYk9UV6UHWTjMogN';
    const SECRET_KEY = 'Rd33nuIvLF';
    const search = this.state.value;

    try{
        if (search === "") {
            this.setState({movies: [], isLoading: false})
        } else {
            const {data: {
                items
                }} = await axios.get('/api/v1/search/movie.json', {
                    params: {
                        // 검색해야할 영화 정보 
                       query: search,
                        // 검색 건수.
                        display: 20
                    },
                    // 시크릿키 넣기
                    headers: {
                        'X-Naver-Client-id': ID_KEY,
                        'X-Naver-Client-Secret' : SECRET_KEY
                    }
                });
            // 영화 정보를 State 에 저장. 
            this.setState({movies: items, isLoading: false});
        }
    } catch(error) {
        console.log(error);
    }
};

    componentDidMount(){
        this.getSearchMovie();
    };

    // 검색 정보를 State 에 저장.
    handleChange = (e) => {
        this.setState({value: e.target.value});
    };
    // input 에서 엔트 입력시 정보 전송. 
    handleSubmit = (e) => {
        e.preventDefault();
        // 전송하면 getSearchMovie 함수 실행
        this.getSearchMovie(); 
    };


    render(){
        const {movies, isLoading} = this.state;
    

        return (<section className="container">
            {
                isLoading
                    ?(<div className="loader">
                        <span className="loader__text">Loading..</span>
                    </div>)
                    : (<form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="input_div">
                                <h1>영화 검색하기</h1>
                                <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화를 검색하세요"/>
                            </div>
                            <div className="movies">
                                {movies.map(movie => (
                                    <SearchMovie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor}
                                        />))

                                }
                            </div>
                        </div>
                    </form>)
                }
            </section>);
    }
}

export default Search;