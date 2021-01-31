import React from 'react';

//컴포넌트가 짧으면 컴포넌트 안에 컴포넌트 만들기. 
// 너무 길면 새로운 파일 만들어서 컴포넌트 만들기 

// Potato 컴포넌트를 만들음
function Food({name, pic}) {
  //구조 분해 할당으로 props 불러오기
  return (
    <div>
      <h2>나는{name}가 좋아</h2>)
      <img src={pic} />
    </div>
  );
}

const foodLike = [
                  {
                    name: 'Bom', 
                    image: 'https://user-images.githubusercontent.com/64029753/106384200-ff448d80-640c-11eb-8406-2940c85b6ad4.jpg'
                  },

                  {
                    name: 'Ong',
                    image: 'https://user-images.githubusercontent.com/64029753/106384260-3450e000-640d-11eb-9072-405905355cd3.jpg'
                  },

                  {
                    name: 'Bom2',
                    image: 'https://user-images.githubusercontent.com/64029753/106384291-68c49c00-640d-11eb-8c7c-12bfa3f2e728.png'
                  },

                  {
                    name: 'Ong2',
                    image: 'https://user-images.githubusercontent.com/64029753/106384309-8134b680-640d-11eb-833b-acf0cece07ae.jpg'
                  }

                
                  ];

function App() {
  return (
    <div>
      {/* // Potato 컴포넌트를 불러옴  */}
      {foodLike.map(dish=> (<Food name={dish.name} pic={dish.image}/>))}
    </div>
  );
}

export default App;
