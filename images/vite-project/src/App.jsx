import React from 'react';
import './App.css';

const Card = ({ imageUrl, translateY, onClick }) => (
  <div
    className={`card flex-1 h-80 cursor-pointer bg-cover bg-center grayscale hover:grayscale-0 ${translateY}`}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    onClick={onClick}
  >
    <img src={imageUrl} alt="card" />
  </div>
);

function App() {
  const images = [
    '/brook.png',  
    '/robin.png',  
    '/sanji.jpg',  
    '/nami.jpeg',  
    '/luffy.jpg',
    '/zoro.png', 
    '/usopp.jpg', 
    '/chopper.jpg', 
    '/franky.jpg', 
    '/jimbe.jpg' 
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div
        className="container flex gap-6 h-[650px] w-[900px] justify-center items-center p-5 rounded-lg bg-black"  
      >
        {images.map((imageUrl, index) => (
          <Card
            key={index}
            imageUrl={imageUrl}
            translateY={index % 2 === 0 ? '-translate-y-10' : 'translate-y-10'}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
