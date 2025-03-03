import { useState } from "react";
import Recipe from "./Recipe";


export default function Cuisine({ selectedCuisine }) {
    const [selectedDish, setSelectedDish] = useState('');
    const [isSaved, setIsSaved] = useState([]);
    console.log(isSaved)

    function handleSelectDish(dish) {
        setSelectedDish(dish);
    }

    function handleSave(dish) {
        if (isSaved.some(savedDish => savedDish.dish === dish.dish)) {
            setIsSaved((prevSaved) => {
                return [...prevSaved.filter(newDish => newDish.dish !== dish.dish)]
            })
        } else {
            setIsSaved((prevSaved) => {
                return [dish, ...prevSaved]
            })
        }
    }

    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="font-bold text-2xl">{selectedCuisine} Recipes</h1>
            </div>
            <ul className="ml-5 mt-5">
                {selectedCuisine === "Saved" &&
                    <>
                        {isSaved.length > 0 ? isSaved.map(dish => <Recipe key={dish.dish} cuisine={selectedCuisine} dish={dish.dish}
                            onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />) : 
                            <div>
                                <p>No saved recipes</p>
                                </div>}
                    </>
                }
                {selectedCuisine === "Italian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Spaghetti with Meatballs'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Margherita Pizza'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "Mexican" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Carne Asada Tacos'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Quesadilla'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "Chinese" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Orange Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Fried Rice'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "Indian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tikka Misala'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Butter Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "Thai" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Pad See Ew'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Panang Curry'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "Mediterranean" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Garlic Lemon Shrimp with Orzo'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Mediterranean Lentil Salad with Grilled Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
                {selectedCuisine === "American" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Cheesburger with Fries'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tenders'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved}/>
                    </>
                }
            </ul>
        </>


    );
}