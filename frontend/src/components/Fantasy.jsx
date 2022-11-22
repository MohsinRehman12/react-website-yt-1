import React from 'react'
import CardItem from './CardItem';
import {useState, useEffect } from 'react';
import Cards from './Cards';
import './Cards.css';
import Axios from "axios";


function Fantasy() {

const [bookArr, setbookArr] = useState([{}])

const bookArr2 = [
    {title: 'Harry Potter', author: 'Jk Rowling', price: '10' },
    {title: 'HP', author: 'Jk Rowling', price: '10' },
    {title: 'W', author: 'Jk Rowling', price: '10' },
    {title: 'Harry Potter', author: 'Jk Rowling', price: '10' },
];
 

  useEffect(() => {
    Axios.get('http://localhost:5000/api/get').then((response) => {
      console.log("response.data")

    console.log(response.data)

      response.data.map((books)=>{
      })

      bookArr.shift();


    }).catch(error => {
      console.log(error.response)
    });

  }, [])
  
  // console.log("bookArr")

  // console.log(bookArr);
  // console.log("bookArr2")

  // console.log(bookArr2)
 


  

  return (
    <>
    
    <h1>Here</h1>

    <div className="cards__container">
        <div className="cards__wrapper">
            
            <ul className="cards__items">
                
                {
                    bookArr.map((books) => 
                    <CardItem 
                    src = "images/img-2.jpg"
                    text={books.title} 
                    author = {books.age_level} 
                    label ={books.genre}
                    
                    />)       
                }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Fantasy;


