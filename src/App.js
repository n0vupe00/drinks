import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function App() {


  const [drink, setDrink] = useState('');
  const [glass, setGlass] = useState('');
  const [ingredients1, setIngredients1] = useState('');
  const [ingredients2, setIngredients2] = useState('');
  const [ingredients3, setIngredients3] = useState('');
  const [ingredients4, setIngredients4] = useState('');
  const [ingredients5, setIngredients5] = useState('');
  const [ingredients6, setIngredients6] = useState('');
  const [measure1, setMeasure1] = useState('');
  const [measure2, setMeasure2] = useState('');
  const [measure3, setMeasure3] = useState('');
  const [measure4, setMeasure4] = useState('');
  const [measure5, setMeasure5] = useState('');
  const [measure6, setMeasure6] = useState('');
  const [instructions, setInstructions] = useState('');
  const [icon, setIcon] = useState('');

  const [select, setSelect] = useState(null);




  useEffect(() => {
    const address = URL;

    axios.get(address)
      .then((response) => {
        console.log(response.data);
        setDrink(response.data.drinks[0].strDrink);
        setIcon(response.data.drinks[0].strDrinkThumb + '/preview');
        setGlass(response.data.drinks[0].strGlass);
        setInstructions(response.data.drinks[0].strInstructions);
        setIngredients1(response.data.drinks[0].strIngredient1);
        setIngredients2(response.data.drinks[0].strIngredient2);
        setIngredients3(response.data.drinks[0].strIngredient3);
        setIngredients4(response.data.drinks[0].strIngredient4);
        setIngredients5(response.data.drinks[0].strIngredient5);
        setIngredients6(response.data.drinks[0].strIngredient6);
        setMeasure1(response.data.drinks[0].strMeasure1);
        setMeasure2(response.data.drinks[0].strMeasure2);
        setMeasure3(response.data.drinks[0].strMeasure3);
        setMeasure4(response.data.drinks[0].strMeasure4);
        setMeasure5(response.data.drinks[0].strMeasure5);
        setMeasure6(response.data.drinks[0].strMeasure6);


      }).catch(error => {
        alert(error);
      });
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }




  if (select != null) {
    return (
      <div id="container" style={{ margin: 50 }}>
        <h1>Coctail of the day </h1>
        <button onClick={refreshPage}>New drink</button>
        <h3>Drink name: {drink}</h3>
        <img style={{ width: 300 }} src={icon} alt="Drink icon" />

        <h4>Glass: {glass}</h4>
        <p>{instructions}</p>
        <h4>Ingredients</h4>
        <p>{ingredients1} {measure1}</p>
        <p>{ingredients2} {measure2}</p>
        <p>{ingredients3} {measure3}</p>
        <p>{ingredients4} {measure4}</p>
        <p>{ingredients5} {measure5}</p>
        <p>{ingredients6} {measure6}</p>
      </div>
    );
  } else {
    return (
      <div style={{ margin: 50 }} onClick={e => setSelect(true)}>
        <h1>Coctail of the day </h1>
        <h3>Drink name: {drink}</h3>
        <img style={{ width: 300 }} src={icon} alt="Drink icon" />
        <p> Get instructions by clicking...</p>
      </div>

    );
  }
}

export default App;
