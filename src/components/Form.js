import React,{useState,useEffect} from 'react';
import Recipe  from './Recipe';
function Form() {
  const APP_ID = '5164ce21';
  const APP_KEY = '3e1b09f41063edd83eebc383643276c5';
  
  const [search, setSearch] =  useState('');
  const [query,setQuery] = useState('chicken');
  const [recipes,setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
}

  const updateSearch = e => setSearch(e.target.value);

  const getSearch= (e) => {
     e.preventDefault();
     setQuery(search);
     setSearch('');
  }
  return (
    <div className='form-container'>
      
      <form onSubmit={getSearch}>
        <input
          className='search-input'
          placeholder='Search dish...'
          value={search}
          onChange={updateSearch}
        />
        <button
           className='search-btn'
           type='submit'
        >
          Search
        </button>
      </form>
       <div className='recipes'>
           {recipes.map(recipe => (
       <Recipe 
          title={recipe.recipe.label}
          calories={Math.ceil(recipe.recipe.calories)}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
       />
     ))}
       </div>
    </div>
  )
}

export default Form
