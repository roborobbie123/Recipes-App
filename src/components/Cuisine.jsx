import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import AlernateRecipe from "./AlernateRecipe";

export default function Cuisine({ selectedCuisine, customDishes, onDelete }) {
    const [selectedDish, setSelectedDish] = useState('');
    const [isSaved, setIsSaved] = useState([]);
    const [isCustom, setIsCustom] = useState(customDishes);

    function handleSelectDish(dish) {
        setSelectedDish(dish);
    }

    function handleSave(dish) {
        const validated = isSaved.filter(savedDish => savedDish != null);

        if (validated.some(savedDish => savedDish.dish === dish.dish)) {
            setIsSaved(validated.filter(savedDish => savedDish.dish !== dish.dish));
            return;
        } else {
            setIsSaved(prevSaved => [dish, ...prevSaved]);
        }
    }

    function handleCustom(dish) {
        const validated = isCustom.filter(savedDish => savedDish != null);

        if (validated.some(savedDish => savedDish.dish === dish.dish)) {
            onDelete(dish);
            return;
        } else {
            setIsCustom(prevSaved => [dish, ...prevSaved]);
        }
    }

    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="font-bold text-2xl" >{selectedCuisine} Recipes</h1>
            </div>
            <ul className="md:ml-75 sm:ml-5 mt-5 w-3/4 flex flex-col flex-wrap">
                {selectedCuisine === "Custom" &&
                    <>
                        {customDishes.length > 0 ? customDishes.map(
                            dish => <AlernateRecipe dish={dish} key={dish.dish} onSelect={handleSelectDish}
                                onSave={handleCustom} isSaved={isCustom} />) :
                            <div>
                                <p>No saved recipes</p>
                            </div>}
                    </>
                }
                {selectedCuisine === "Saved" &&
                    <>
                        {isSaved.length > 0 ? isSaved.filter(dish => dish && dish.dish).map(
                            dish => <Recipe key={dish.dish} cuisine={selectedCuisine} dish={dish.dish}
                                onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />) :
                            <div>
                                <p>No saved recipes</p>
                            </div>}
                    </>

                }
                {selectedCuisine === "Italian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Spaghetti with Meatballs'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Margherita Pizza'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "Mexican" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Carne Asada Tacos'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Quesadilla'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "Chinese" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Orange Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Fried Rice'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "Indian" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tikka Misala'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Butter Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "Thai" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Pad See Ew'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Panang Curry'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "Mediterranean" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Garlic Lemon Shrimp with Orzo'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Mediterranean Lentil Salad with Grilled Chicken'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
                {selectedCuisine === "American" &&
                    <>
                        <Recipe cuisine={selectedCuisine} dish={'Cheesburger with Fries'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                        <Recipe cuisine={selectedCuisine} dish={'Chicken Tenders'} onSelect={handleSelectDish} onSave={handleSave} isSaved={isSaved} />
                    </>
                }
            </ul>
        </>


    );
}