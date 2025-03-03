import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Header from './components/Header';
import CuisineList from './components/CuisineList';
import Cuisine from './components/Cuisine';



function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('Italian');
  

  function handleSelectCuisine(cuisine) {
    setSelectedCuisine(cuisine);
  }


  return (
    <>
      <Header />
      <CuisineList onSelect={handleSelectCuisine} selectedCuisine={selectedCuisine}/>
      <Cuisine selectedCuisine={selectedCuisine} />

    </>
  );
}

export default App
