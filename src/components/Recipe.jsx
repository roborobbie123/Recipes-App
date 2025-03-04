import { useState } from "react";

import { RECIPES } from "../recipes";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

export default function Recipe({ cuisine, dish, onSelect, onSave, isSaved }) {

    const [isOpen, setIsOpen] = useState(false);

    const foodItem = RECIPES.find(recipe => recipe.dish === dish);

    function handleIsOpen(dish) {
        setIsOpen(prev => !prev);
        onSelect(dish);
    }

    const inFavorites = isSaved.some(savedDish => savedDish.dish === foodItem?.dish);

    let iconStyles = '';

    if (inFavorites) {
        iconStyles = 'text-red-400 text-xl hover:text-red-500 hover:text-bold hover:size-6';
    } else {
        iconStyles = 'text-blue-400 text-xl hover:text-blue-500 hover:text-bold hover:size-6'
    }

    const buttonStyles = isOpen ? 'font-semibold text-xl' : ' text-xl font-normal hover:font-semibold';


    return (
        <>
            <li className="my-5 flex align-middle">
                <button className="mr-4" onClick={() => onSave(foodItem)}>
                    {inFavorites ? <CiCircleMinus className={iconStyles} /> : <IoIosAddCircleOutline className={iconStyles} />}
                </button>
                <button className={buttonStyles} onClick={() => { handleIsOpen(dish) }}>{dish}</button>
            </li>
            {isOpen &&
                <div className="ml-5">
                    <ul className="list-disc mb-3">
                        <div className="my-3">
                            <span className="underline">Time:</span><span> {foodItem?.time}</span>
                        </div>
                        <p className="underline">Ingredients: </p>
                        {foodItem?.ingredients.map((ingredient, index) =>
                            <li className="ml-3" key={index}>{ingredient}</li>)}
                    </ul>
                    <div className="w-1/3 h-100">
                        <a href={foodItem?.link} target="_blank" rel="noopener noreferrer" >
                            <img src={foodItem?.img} alt={foodItem?.dish} className="w-full h-full rounded-sm" />
                        </a>
                    </div>
                    <ol className="list-decimal w-1/2">
                        <p className="mt-3 underline">Steps: </p>
                        {foodItem?.steps.map((step, index) =>
                            <li className="ml-4 my-2" key={index}>{step}</li>)}

                    </ol>
                </div>}

        </>
    );

}

