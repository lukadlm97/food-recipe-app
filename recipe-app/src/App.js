import React,{useEffect,useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = 'dde0dd50'
  const APP_KEY = '481e9847303076d35eda40887e193503'

  useEffect(()=>{
    getRecipies()
  },[])

  const getRecipies = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>Search</button>
      </form>
     
    </div>
  );
}

export default App;
