import { useState } from "react";

import { RECIPES } from "../recipes";

export default function Recipe({ cuisine, dish, onSelect, onSave }) {
    const [isOpen, setIsOpen] = useState(false);
    

    const foodItem = RECIPES.find(recipe => recipe.dish === dish);

    function handleIsOpen(dish) {
        setIsOpen(prev => !prev);
        onSelect(dish);
    }

    const buttonStyles = isOpen ? 'font-semibold' : 'font-normal hover:font-semibold';

    return (
        <>
            <li className="my-5">
                <button className="mr-2 hover:font-bold text-blue-500" onClick={() => onSave(foodItem)}>save</button><button className={buttonStyles} onClick={() => { handleIsOpen(dish) }}>{dish}</button>
            </li>
            {isOpen &&
                <div className="ml-5">
                    <ul className="list-disc">
                        <div className="my-3">
                            <span className="underline">Time:</span><span> {foodItem?.time}</span>
                        </div>
                        <p className="underline">Ingredients: </p>
                        {foodItem?.ingredients.map((ingredient, index) =>
                            <li className="ml-3" key={index}>{ingredient}</li>)}
                    </ul>
                    <ol className="list-decimal">
                        <p className="mt-3 underline">Steps: </p>
                        {foodItem?.steps.map((step, index) => 
                        <li className="ml-4" key={index}>{step}</li>)}

                    </ol>
                </div>}
        </>
    );

}

