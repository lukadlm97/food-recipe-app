import React,{useEffect,useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from './component/Recipe'

function App() {
  const APP_ID = 'dde0dd50'
  const APP_KEY = '481e9847303076d35eda40887e193503'


  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipies()
  },[query])

  const getRecipies = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = e =>{
      setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' 
                type='text' 
                value={search}
                onChange={updateSearch}/>
        <button className='search-button' 
                type='submit'>
                  Search
        </button>
      </form>
      <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
                      key = {recipe.recipe.label}
                      title={recipe.recipe.label} 
                      calories={recipe.recipe.calories}
                      image={recipe.recipe.image}
                      ingredients = {recipe.recipe.ingredients}
                      />
          ))}
      </div>

     
    </div>
  );
}

export default App;
