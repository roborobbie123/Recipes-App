import { useState } from 'react'
import Header from './components/Header';
import CuisineList from './components/CuisineList';
import Cuisine from './components/Cuisine';



function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('Saved');


  function handleSelectCuisine(cuisine) {
    setSelectedCuisine(cuisine);
  }


  return (
    <>
      <Header />
      <CuisineList onSelect={handleSelectCuisine} selectedCuisine={selectedCuisine} />
      <Cuisine selectedCuisine={selectedCuisine} />

    </>
  );
}

export default App
