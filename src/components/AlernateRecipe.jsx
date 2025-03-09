import { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import CustomDish from "./CustomDish";

export default function Recipe({ dish, onSelect, onSave, handleEdit }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleIsOpen(dish) {
        setIsOpen(prev => !prev);
        onSelect(dish);
    }

    function handleEdit() {
        setIsEditing(prevState => !prevState);
    }

    const inFavorites = true;

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
                <button className="mr-4" onClick={() => onSave(dish)}>
                    <CiCircleMinus className={iconStyles} />
                </button>
                <button className={buttonStyles} onClick={() => { handleIsOpen(dish) }}>{dish.dish}</button>
                <button className="ml-5" onClick={() => handleEdit()}><CiEdit className="hover:text-bold hover:size-6 size-5" /></button>
            </li>
            {isEditing && <CustomDish />}
            {isOpen &&
                <div className="ml-5">
                    <ul className="list-disc mb-3">
                        <div className="my-3">
                            <span className="underline">Time:</span><span> {dish.time}</span>
                        </div>
                        <p className="underline">Ingredients: </p>
                        {dish.ingredients.map((ingredient, index) =>
                            <li className="ml-3" key={index}>{ingredient}</li>)}
                    </ul>
                    {dish.img &&
                        <div className="w-1/3 h-100">
                            <a href={dish.link} target="_blank" rel="noopener noreferrer" >
                                <img src={dish.img} alt={dish.dish} className="w-full h-full rounded-sm" />
                            </a>
                        </div>
                    }
                    <ol className="list-decimal w-1/2">
                        <p className="mt-3 underline">Steps: </p>
                        {dish.steps.map((step, index) =>
                            <li className="ml-4 my-2" key={index}>{step}</li>)}

                    </ol>
                </div>}

        </>
    );

}