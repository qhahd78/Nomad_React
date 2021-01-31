import React from 'react';
import PropTypes from 'prop-types';

//컴포넌트가 짧으면 컴포넌트 안에 컴포넌트 만들기. 
// 너무 길면 새로운 파일 만들어서 컴포넌트 만들기 

// Potato 컴포넌트를 만들음
function Food({name, image, rating}) {
  //구조 분해 할당으로 props 불러오기
  return (
    <div>
      <h2>나는 {name}가 좋아</h2>
      <h4>{rating}</h4>
      <img src={image} alt ={name}/>
    </div>
  );
}

const foodLike = [
                  {
                    id: 1,
                    name: 'Bom', 
                    image: 'https://user-images.githubusercontent.com/64029753/106384200-ff448d80-640c-11eb-8406-2940c85b6ad4.jpg',
                    rating: 5,
                  },

                  {
                    id: 2,
                    name: 'Ong',
                    image: 'https://user-images.githubusercontent.com/64029753/106384260-3450e000-640d-11eb-9072-405905355cd3.jpg',
                    rating: 4.8,

                  },

                  {
                    id: 3,
                    name: 'Bom2',
                    image: 'https://user-images.githubusercontent.com/64029753/106384291-68c49c00-640d-11eb-8c7c-12bfa3f2e728.png',
                    rating: 4.9,
                  },

                  {
                    id: 4,
                    name: 'Ong2',
                    image: 'https://user-images.githubusercontent.com/64029753/106384309-8134b680-640d-11eb-833b-acf0cece07ae.jpg',
                    rating: 4.0,

                  },

                  {
                    id: 5,
                    name: 'OngBom',
                    image: 'https://user-images.githubusercontent.com/64029753/106388221-e2b25080-6420-11eb-8a83-001cef6a1dbe.jpeg',
                    rating: 4.6,

                  }

                  ];


function App() {
  return (
    <div>
      {/* // Potato 컴포넌트를 불러옴  */}
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
