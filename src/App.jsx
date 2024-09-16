import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';  
import ProductCard from './components/ProductCard';
import './App.css';

var object =[
  {
    image : "https://shop.mtrfoods.com/cdn/shop/collections/Pickle.jpg",
    name : "Achar",
    option1 : ['100g',5],
    option2 : ['200g',25],
    option3 : ['1000g',100],

  },
  {
    image : "https://shop.mtrfoods.com/cdn/shop/collections/Pickle.jpg",
    name : "Achar2",
    option1 : ['100g',50],
    option2 : ['200g',250],
    option3 : ['1000g',1000],

  },
  {
    image : "https://shop.mtrfoods.com/cdn/shop/collections/Pickle.jpg",
    name : "Achar3",
    option1 : ['100g',[5]],
    option2 : ['200g',[25]],
    option3 : ['1000g',100],

  },
]

const App = () => {

  return (
    <div className="App">
      <Header />
      <Banner />
     {object.map((value,index)=>(
     <ProductCard
    key={index}
     image={value.image}
     name={value.name}
     option1={value.option1}
     option2={value.option2}
     option3={value.option3}
     />
     ))}
      <Footer />
      
    </div>
  );
};

export default App;
