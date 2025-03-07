import { useState, useCallback, useEffect } from 'react'
import Header from './components/Header';
import CuisineList from './components/CuisineList';
import Cuisine from './components/Cuisine';
import CustomDish from './components/CustomDish';


function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('Saved');
  const [showAdd, setShowAdd] = useState(false);
  const [newDishes, setNewDishes] = useState([]);

  const [customDish, setCustomDish] = useState({
    link: '',
    img: '',
    time: '',
    dish: '',
    ingredients: [],
    steps: [],
    stepsCount: 0,
    ingredientCount: 0
  })

  console.log(customDish);

  useEffect(() => {
    console.log("New dishes updated:", newDishes);
  }, [newDishes]);


  function handleSelectCuisine(cuisine) {
    setShowAdd(false);
    setSelectedCuisine(cuisine);
  }

  function handleShowAddDish() {
    setShowAdd(prevState => !prevState);
  }

  const handleAddDish = useCallback(function handleAddDish(time, dish, ingredients, steps) {
    const newDish = {
      link: '',
      img: '',
      time: time,
      dish: dish,
      ingredients: ingredients,
      steps: steps
    }

    setNewDishes(prevDishes => {
      const updatedDishes = [newDish, ...prevDishes];
      console.log(updatedDishes);
      return updatedDishes;
    })

    setCustomDish({
      link: '',
      img: '',
      time: '',
      dish: '',
      ingredients: [],
      steps: [],
      stepsCount: 0,
      ingredientCount: 0
    })
    console.log('new dishes: ' + newDishes);
  });

  function handleDeleteDish(dish) {
    setNewDishes(prevDishes => (
      prevDishes.filter(recipe => recipe.dish !== dish.dish)
    ))
  }

  const handleAddName = useCallback(function handleAddName(newName) {
    setCustomDish(prevState => ({
      ...prevState,
      dish: newName
    }))
  }, [])

  const handleAddTime = useCallback(function handleAddTime(newTime) {
    setCustomDish(prevState => ({
      ...prevState,
      time: newTime
    }))
  }, []);

  const addIngredientField = useCallback(function addIngredientField() {
    setCustomDish(prevState => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ''],
      ingredientCount: prevState.ingredientCount + 1
    }))
  }, [])

  const addStepField = useCallback(function addStepField() {
    setCustomDish(prevState => ({
      ...prevState,
      steps: [...prevState.steps, ''],
      stepsCount: prevState.stepsCount + 1
    }))
  }, [])

  const updateIngredients = useCallback(function updateIngredients(index, value) {
    setCustomDish(prevState => {
      const newIngredients = [...prevState.ingredients];
      newIngredients[index] = value;
      return {
        ...prevState,
        ingredients: newIngredients
      }
    })
    console.log('new dishes: ' + newDishes);
  }, [])

  const updateSteps = useCallback(function updateSteps(index, value) {
    setCustomDish(prevState => {
      const newSteps = [...prevState.steps];
      newSteps[index] = value;
      return {
        ...prevState,
        steps: newSteps
      }
    })
    console.log('new dishes: ' + newDishes);
  }, [])



  return (
    <>
      <Header />
      <CuisineList onSelect={handleSelectCuisine} selectedCuisine={selectedCuisine} showAdd={handleShowAddDish} />
      {!showAdd && <Cuisine selectedCuisine={selectedCuisine} customDishes={newDishes} onDelete={handleDeleteDish}/>}

      {showAdd && <CustomDish onAdd={handleAddDish} addIngredient={addIngredientField} addStep={addStepField} addName={handleAddName} addTime={handleAddTime}
        updateIngredients={updateIngredients} updateSteps={updateSteps} customDish={customDish} />}

    </>
  );
}

export default App
