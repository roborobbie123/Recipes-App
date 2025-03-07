import { useState } from 'react'
import Header from './components/Header';
import CuisineList from './components/CuisineList';
import Cuisine from './components/Cuisine';
import CustomDish from './components/CustomDish';



function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('Saved');
  const [showAdd, setShowAdd] = useState(false);
  const [newDishes, setNewDishes] = useState([]);


  function handleSelectCuisine(cuisine) {
    setShowAdd(false);
    setSelectedCuisine(cuisine);
  }

  function handleShowAddDish() {
    setShowAdd(prevState => !prevState);
  }

  function handleAddDish(dish) {
    if (newDishes.length < 1) {
      setNewDishes([dish]);
    }
    setNewDishes(prevDishes =>
      [dish, ...prevDishes])
    console.log(newDishes);
  }

  return (
    <>
      <Header />
      <CuisineList onSelect={handleSelectCuisine} selectedCuisine={selectedCuisine} showAdd={handleShowAddDish} />
      {!showAdd && <Cuisine selectedCuisine={selectedCuisine} savedDishes={newDishes} />}
      {showAdd && <CustomDish onAdd={handleAddDish} />}

    </>
  );
}

export default App
