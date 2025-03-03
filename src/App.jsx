import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Header from './components/Header';
import CuisineList from './components/CuisineList';



function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  function handleSelectCuisine(cuisine) {
    setSelectedCuisine(cuisine);
  }


  return (
    <>
      <Header />
      <CuisineList onSelect={handleSelectCuisine} />
      <div className="flex justify-center mt-10">
        <h1 className="font-bold text-2xl">{selectedCuisine} Recipes</h1>
      </div>

    </>
  );
}

export default App
