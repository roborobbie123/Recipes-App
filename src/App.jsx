import { useState, useEffect, useContext } from 'react'
import Header from './components/Header';
import CuisineList from './components/CuisineList';
import Cuisine from './components/Cuisine';
import CustomDish from './components/CustomDish';
import { CustomDishContext } from './customDishContext';


function App() {

  const {
    selectedCuisine,
    showAdd,
    newDishes,
    handleSelectCuisine,
    handleShowAddDish,
    handleDeleteDish,
    handleAddDish,
    handleAddName,
    handleAddTime,
    addIngredientField,
    addStepField,
    updateIngredients,
    updateSteps,
    customDish
  } = useContext(CustomDishContext);

  return (
    <>
      <Header />
      <CuisineList
        onSelect={handleSelectCuisine}
        selectedCuisine={selectedCuisine}
        showAdd={handleShowAddDish} />
      {!showAdd && <Cuisine
        selectedCuisine={selectedCuisine}
        customDishes={newDishes}
        onDelete={handleDeleteDish} />}

      {showAdd && <CustomDish
        onAdd={handleAddDish}
        addIngredient={addIngredientField}
        addStep={addStepField}
        addName={handleAddName}
        addTime={handleAddTime}
        updateIngredients={updateIngredients}
        updateSteps={updateSteps}
        customDish={customDish} />}
    </>
  );
}

export default App
