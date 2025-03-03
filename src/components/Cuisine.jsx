import { useState } from "react";
import Recipe from "./Recipe";

export default function Cuisine({ selectedCuisine }) {
    const [selectedDish, setSelectedDish] = useState('');
    const [isSaved, setIsSaved] = useState([]);

    function handleSelectDish(dish) {
        setSelectedDish(dish);
    }

    function handleSave(dish) {
        setIsSaved((prevSaved) => {
            return [dish, ...prevSaved]
        })
    }

    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="font-bold text-2xl">{selectedCuisine} Recipes</h1>
            </div>
            <ul className="ml-5 mt-5">
            {selectedCuisine === "Saved" &&
                    <>
                        {isSaved.length > 0 && isSaved.dish.map(dish => <li>{dish}</li>)}
                    </>
                }
                {selectedCuisine === "Italian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Spaghetti with Meatballs'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Margherita Pizza'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "Mexican" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Carne Asada Tacos'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Quesadilla'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "Chinese" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Orange Chicken'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Fried Rice'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "Indian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tikka Misala'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Butter Chicken'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "Thai" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Pad See Ew'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Panang Curry'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "Mediterranean" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Garlic Lemon Shrimp with Orzo'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Mediterranean Lentil Salad with Grilled Chicken'} onSelect={handleSelectDish}/>
                    </>
                }
                {selectedCuisine === "American" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Cheesburger with Fries'} onSelect={handleSelectDish}/>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tenders'} onSelect={handleSelectDish}/>
                    </>
                }
            </ul>
        </>


    );
}