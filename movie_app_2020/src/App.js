import React from 'react';
// import Home from './routes/Home'
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
// React.Component 클래스를 상속 받음.
      // exact true 하면 path props 랑 정확히 일치하는 url 만 반응. 
// Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 한다 .
function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>  
  );
}

export default App;